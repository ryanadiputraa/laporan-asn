from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

# Config
app = Flask(__name__, static_folder='../react/build/static' , template_folder='../react/build')
app.config['SECRET_KEY'] = '79d167f27ca336d2876adf2866a07381'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'

db = SQLAlchemy(app)


# Model
class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  nip = db.Column(db.Integer, nullable=False, unique=True)
  password = db.Column(db.String(20), nullable=False)
  name = db.Column(db.String(100), nullable=False)
  position = db.Column(db.String(100), nullable=False)
  boss_name = db.Column(db.String(100), nullable=False)
  boss_position = db.Column(db.String(100), nullable=False)
  region = db.Column(db.String(50), nullable=False)
  

  def __repr__(self):
    return f'(name: {self.name}, nip: {self.nip})'




# Route
@app.route('/', defaults={'path' : ''})
@app.route('/<path:path>', methods=['GET', 'POST'])
def index(path):

  if request.method == 'POST':
    if request.form['formtype'] == 'register':
      nip = request.form['nip']
      password = request.form['password']
      name = request.form['name']
      position = request.form['position']
      boss_name = request.form['boss-name']
      boss_position = request.form['boss-position']
      region = request.form['region']

      new_account = User(nip=nip, password=password, name=name, position=position, boss_name=boss_name, boss_position=boss_position, region=region)

      db.session.add(new_account)
      db.session.commit()
      return redirect('/login')

    elif request.form['formtype'] == 'login':
      nip = request.form['nip']
      password = request.form['password']
      
      # validate account
      if User.query.filter_by(nip=nip).first() is not None and password == User.query.filter_by(nip=nip).first().password:
        user = User.query.filter_by(nip=nip).first()
        return redirect(url_for('index', name=user.name, nip=user.nip, position=user.position, boss_name=user.boss_name, boss_position=user.boss_position, region=user.region))

      return render_template('index.html', error_message="Akun tidak ditemukan, mohon periksa kembali NIP dan Kata Sandi anda")

  return render_template('index.html', name=request.args.get('name'), nip=request.args.get('nip'), position=request.args.get('position'), boss_name=request.args.get('boss_name'), boss_position=request.args.get('boss_position'), region=request.args.get('region'), error_message=request.args.get('error_message'))





if __name__ == "__main__":
    app.run(debug=True)