from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, static_folder='../react/build/static', templates_foler='../react/build')
app.config['SECRET_KEY'] = '79d167f27ca336d2876adf2866a07381'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nip = db.Column(db.Integer, nullabel=False)
    password = db.Column(db.String(20), nullabel=False)
    name = db.Column(db.String(100), nullabel=False)
    position = db.Column(db.String(100), nullabel=False)
    boss_name = db.Column(db.String(100), nullabel=False)
    boss_position = db.Column(db.String(100), nullabel=False)
    region = db.Column(db.String(50), nullabel=False)

    def __repr__(self):
        return f'(name: {self.name}, nip: {self.nip})'


@app.route('/')
def index():
    return 'index'




if __name__ == "__main__":
    app.run(debug=True)