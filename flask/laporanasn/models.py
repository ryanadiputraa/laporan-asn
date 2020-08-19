from laporanasn import db, login_manager
from flask_login import UserMixin

@login_manager.user_loader
def load_user(user_id):
  return User.query.get(int(user_id))

class User(db.Model, UserMixin):
  id = db.Column(db.Integer, primary_key=True)
  nip = db.Column(db.Integer, nullable=False, unique=True)
  password = db.Column(db.String(20), nullable=False)
  name = db.Column(db.String(100), nullable=False)
  position = db.Column(db.String(100), nullable=False)
  boss_name = db.Column(db.String(100), nullable=False)
  boss_position = db.Column(db.String(100), nullable=False)
  region = db.Column(db.String(50), nullable=False)
  

  def __repr__(self):
    return f"(name: {self.name}, nip: {self.nip})"