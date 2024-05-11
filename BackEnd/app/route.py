from flask import Blueprint
from .view import Account

app_bp = Blueprint("api", __name__)
app_bp.add_url_rule(
    "/save-password/", view_func=Account().save_password, methods=["POST"]
)
app_bp.add_url_rule(
    "/get-passwords/", view_func=Account().get_passwords, methods=["GET"]
)
app_bp.add_url_rule("/get-password/", view_func=Account().get_password, methods=["GET"])

app_bp.add_url_rule(
    "/delete-password/", view_func=Account().delete_password, methods=["DELETE"]
)
