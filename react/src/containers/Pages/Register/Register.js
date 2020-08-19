import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Register.css';
import { Card, CardTitle, CardBody } from 'reactstrap';

const Register = () => {

  const isValid = () => {
    let submitButton = document.querySelector('.submit');
    let nip = document.querySelector('#nip').value;
    let name = document.querySelector('#name').value;
    let position = document.querySelector('#position').value;
    let boss_name = document.querySelector('#boss_name').value;
    let boss_position = document.querySelector('#boss_position').value;
    let region = document.querySelector('#region').value;
    let password = document.querySelector('#password').value;
    let confirm_password = document.querySelector('#confirm_password').value;
    
    if (nip.length === 18 && name.length > 1 && name.length < 100 && position.length > 1 && position.length < 100 && boss_name.length > 1 && boss_name.length < 100 && boss_position.length > 1 && boss_position.length < 100 && region.length > 1 && region.length < 50 && password.length > 1 && password.length < 20 && password === confirm_password) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  const validateInput = (e, type = 'Karakter', maxInput, minInput = 2) => {
    if (e.target.value.length < minInput) {
      const feedbackHolder = document.querySelector(`.${e.target.id} .invalid-feedback`);
      feedbackHolder.style = 'display: block';
      const feedback = document.querySelector(`.${e.target.id} .invalid-feedback span`);
      feedback.innerHTML = `Minimal ${e.target.placeholder} adalah ${minInput} ${type}`;
      
    } else if (e.target.value.length > maxInput) {
        const feedbackHolder = document.querySelector(`.${e.target.id} .invalid-feedback`);
        feedbackHolder.style = 'display: block';
        
        const feedback = document.querySelector(`.${e.target.id} .invalid-feedback span`);
        feedback.innerHTML = `Maksimal ${e.target.placeholder} adalah ${maxInput} ${type}`;

    } else {
        const feedbackHolder = document.querySelector(`.${e.target.id} .invalid-feedback`);
        feedbackHolder.style = 'display: none';
    }
  }

  const matchPassword = () => {
    const pass = document.querySelector('#password');
    const confirmPass = document.querySelector('#confirm_password');
    if (confirmPass.value !== pass.value) {
      const feedbackHolder = document.querySelector('.confirm_password .invalid-feedback');
      feedbackHolder.style = 'display: block';
      const feedback = document.querySelector('.confirm_password .invalid-feedback span');
      feedback.innerHTML = `Kata Sandi tidak sesuai`;
    } else {
      const feedbackHolder = document.querySelector('.confirm_password .invalid-feedback');
      feedbackHolder.style = 'display: none';
    }
  }

  return (
    <Fragment>
      <div className="register container mt-4" >
        <Card>
          <CardTitle><h2 className="text-center mt-3">Daftar Akun</h2></CardTitle>
          <CardBody>
            <div className="content-section">
              <form action="/register" method="POST">
                <fieldset className="form-group">
                  <input type="text" name="formtype" id="formtype" defaultValue="register" style={{ 'display':'none' }}/>
                  <div className="form-group nip">
                    <input type="number" min="0" placeholder="NIP" name="nip" id="nip" onChange={(e) => {
                      validateInput(e, 'Digit', 18, 18);
                      isValid();
                      }} />
                    <div className="invalid-feedback">
                      <span></span>
                    </div> 
                  </div>
                  <div className="form-group name">
                    <input type="text"  placeholder="Nama" name="name" id="name" onChange={(e) => {       
                      validateInput(e, 'Karakter', 100);
                      isValid();
                      }}/>
                    <div className="invalid-feedback">
                      <span></span>
                    </div> 
                  </div>
                  <div className="form-group position">
                    <input type="text"  placeholder="Jabatan" name="position" id="position" onChange={(e) => {
                      validateInput(e, 'Karakter', 100);
                      isValid();
                      }}/>
                    <div className="invalid-feedback">
                      <span></span>
                    </div> 
                  </div>
                  <div className="form-group boss_name">
                    <input type="text"  placeholder="Nama Atasan Langsung" name="boss_name" id="boss_name" onChange={(e) => {
                     validateInput(e, 'Karakter', 100);
                     isValid();
                      }}/>
                    <div className="invalid-feedback">
                      <span></span>
                    </div> 
                  </div>
                  <div className="form-group boss_position">
                    <input type="text"  placeholder="Jabatan Atasan Langsung" name="boss_position" id="boss_position" onChange={(e) => {
                      validateInput(e, 'Karakter', 100);
                      isValid();
                      }}/>
                    <div className="invalid-feedback">
                      <span></span>
                    </div> 
                  </div>
                  <div className="form-group region">
                    <input type="text"  placeholder="Kota/Kabupaten" name="region" id="region" onChange={(e) => {
                      validateInput(e, 'Karakter', 100);
                      isValid();
                      }}/>
                    <div className="invalid-feedback">
                      <span></span>
                    </div> 
                  </div>
                  <div className="form-group password">
                    <input type="password" placeholder="Kata sandi" name="password" id="password" onChange={(e) => {
                      validateInput(e, 'Karakter', 20);
                      matchPassword();
                      isValid();
                      }}/>
                    <div className="invalid-feedback">
                      <span></span>
                    </div>
                  </div>
                  <div className="form-group confirm_password">
                    <input type="password" placeholder="Konfirmasi Kata sandi" name="confirm_password" id="confirm_password" onChange={(e) => { 
                      validateInput(e, 'Karakter', 20);
                      matchPassword();
                      isValid();
                      }}/>
                    <div className="invalid-feedback">
                      <span></span>
                    </div>
                  </div>
                </fieldset>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary submit" disabled>Daftar</button>
                </div>
              </form>
            </div>
            <div className="border-top pt-3">
              <small className="text-muted">Sudah punya akun ? <a href="/login" className="ml-2">Login di sini !</a></small>
            </div>
          </CardBody>
        </Card>
      </div>
    </Fragment>
  )
}

export default Register;