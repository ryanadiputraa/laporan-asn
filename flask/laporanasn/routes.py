from flask import render_template, request, redirect, url_for
from laporanasn import app, api, db, bcrypt, CORS
from laporanasn.models import User
from flask_login import login_user
from flask_restful import Resource
import requests


BASE_URL = 'http://127.0.0.1:5000/'

# RESTFUL API
class LoginUser(Resource):
  def get(self, nip, password):
    account = User.query.filter_by(nip=nip).first()
    if account is not None and bcrypt.check_password_hash(account.password, password):
      return {
        'nip' : account.nip,
        'name' : account.name,
        'position' : account.position,
        'boss_name' : account.boss_name,
        'boss_position' : account.boss_position,
        'region' : account.region,
        }
    return {
      'message' : 'akun tidak ditemukan'
    }

# Endpoints
api.add_resource(LoginUser, '/login/<int:nip>/<string:password>')
cors = CORS(app, resources={r'/login/*': {'origins' : '*'}})

# SPA Routes
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
      return redirect(url_for('index'))


  return render_template('index.html')