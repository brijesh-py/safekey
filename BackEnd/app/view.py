from flask import jsonify, redirect, request
from app.models import SavePassword, db
from app import cipher


class Account:
    def __init__(self) -> None:
        pass

    def encrypt_pass(self, password):
        return cipher.encrypt(password)

    def decrypt_pass(self, password):
        return cipher.decrypt(password)

    def serializable(self, password):
        temp = []
        for item in password:
            temp.append(
                {
                    "site_url": item.site_url,
                    "email": item.email,
                    "username": item.username,
                    "note": item.note,
                }
            )
        return temp

    def save_password(self):
        if request.method == "POST":
            site_url = request.get_json().get("site_url")
            email = request.get_json().get("email")
            username = request.get_json().get("username")
            password = request.get_json().get("password")
            note = request.get_json().get("note")
            obj_save_pass = SavePassword.query.filter_by(site_url=site_url).first()
            if obj_save_pass:
                obj_save_pass.email = email
                obj_save_pass.username = username
                obj_save_pass.password = self.encrypt_pass(password)
                obj_save_pass.note = note
                db.session.commit()
                return jsonify({"success": True, "message": "Successfully updated"})
            else:
                obj = SavePassword(
                    email=email,
                    username=username,
                    site_url=site_url,
                    password=self.encrypt_pass(password),
                    note=note,
                )
            db.session.add(obj)
            db.session.commit()
            return jsonify({"success": True, "message": "Successfully saved"})
        return jsonify({"success": False, "message": "Method not allowed"})

    def get_passwords(self):
        fetch_password = SavePassword.query.all()
        passwords = self.serializable(fetch_password)
        return jsonify({"success": True, "passwords": passwords})

    def get_password(self):
        query = request.args.get("query")
        response = SavePassword.query.filter_by(site_url=query).first()
        if response:
            temp = {
                "site_url": query,
                "username": response.username,
                "email": response.email,
                "password": self.decrypt_pass(response.password).decode(),
                "note": response.note,
            }
            return jsonify({"success": True, "password": temp})
        return jsonify({"success": False, "message": "URL not found"})

    def delete_password(self):
        site_url = request.get_json().get("site_url")
        print(site_url)
        response = SavePassword.query.filter_by(site_url=site_url).first()
        if response:
            db.session.delete(response)
            db.session.commit()
            return jsonify(
                {"success": True, "message": "Successfully deleted password"}
            )
        return jsonify({"success": False, "message": "URL not found"})
