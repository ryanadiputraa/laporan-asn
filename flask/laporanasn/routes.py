from flask import render_template, request, redirect, url_for
from laporanasn import app, db, bcrypt
from laporanasn.models import User
<<<<<<< HEAD
from flask_login import login_user, current_user
=======
>>>>>>> 3bfa89707f490ad7c74898a35d716f6d0e11b0e7


@app.route('/', defaults={'path' : ''})
@app.route('/<path:path>', methods=['GET', 'POST'])
def index(path):

  if request.method == 'POST':
    if request.form['formtype'] == 'register':
      nip = request.form['nip']
      password = request.form['password']
      hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
      name = request.form['name']
      position = request.form['position']
      boss_name = request.form['boss_name']
      boss_position = request.form['boss_position']
      region = request.form['region']

      new_account = User(nip=nip, password=hashed_password, name=name, position=position, boss_name=boss_name, boss_position=boss_position, region=region)

      db.session.add(new_account)
      db.session.commit()
      return redirect('/login')

    elif request.form['formtype'] == 'login':
      nip = request.form['nip']
      password = request.form['password']
      account = User.query.filter_by(nip=nip).first()

      if account is not None and bcrypt.check_password_hash(account.password, password):
        return redirect(url_for('index', name=account.name, nip=account.nip, position=account.position, boss_name=account.boss_name, boss_position=account.boss_position, region=account.region))

      return render_template('index.html', error_message="Akun tidak ditemukan, mohon periksa kembali NIP dan Kata Sandi anda")

  return render_template('index.html', name=request.args.get('name'), nip=request.args.get('nip'), position=request.args.get('position'), boss_name=request.args.get('boss_name'), boss_position=request.args.get('boss_position'), region=request.args.get('region'), error_message=request.args.get('error_message'))
