from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, static_folder='../react/build/static' , template_folder='../react/build')
app.config['SECRET_KEY'] = '79d167f27ca336d2876adf2866a07381'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nip = db.Column(db.Integer, nullable=False)
    password = db.Column(db.String(20), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    position = db.Column(db.String(100), nullable=False)
    boss_name = db.Column(db.String(100), nullable=False)
    boss_position = db.Column(db.String(100), nullable=False)
    region = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return f'(name: {self.name}, nip: {self.nip})'


@app.route('/', defaults={'path' : ''})
@app.route('/<path:path>', methods=['GET', 'POST'])
def index(path):
    return render_template('index.html')




if __name__ == "__main__":
    app.run(debug=True)