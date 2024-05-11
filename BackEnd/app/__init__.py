from flask import Flask
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_simple_crypt import SimpleCrypt
from flask_cors import CORS

app = Flask(__name__)
app.config["SECRET_KEY"] = "test_secret_key"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///localhost.db"

db = SQLAlchemy(app=app)
migrate = Migrate(app=app, db=db)
bcrypt = Bcrypt(app=app)
cipher = SimpleCrypt()
cipher.init_app(app)
cors = CORS(app=app)

from app.route import app_bp

app.register_blueprint(app_bp)
