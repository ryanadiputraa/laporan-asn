from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

app = Flask(__name__, static_folder='../../react/build/static' , template_folder='../../react/build')
app.config['SECRET_KEY'] = '79d167f27ca336d2876adf2866a07381'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

from laporanasn import routes