from app import db
from datetime import datetime


class SavePassword(db.Model):
    def __init__(self, email, username, site_url, password, note):
        self.email = email
        self.username = username
        self.site_url = site_url
        self.password = password
        self.note = note

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120))
    username = db.Column(db.String(120))
    site_url = db.Column(db.String(120), nullable=False)
    password = db.Column(db.String(150), nullable=False)
    note = db.Column(db.String(120))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"SavePassword('{self.site_url}')"
