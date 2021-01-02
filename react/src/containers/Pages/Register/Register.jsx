import React, {Fragment, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Register.css';
import { Card, CardTitle, CardBody } from 'reactstrap';

const Register = () => {

  const [state, setState] = useState({
    name: '',
    nip : '',
    pos: '',
    bossName: '',
    bossPos: '',
    city: '',
    password : '',
    confirmPassword: ''
  });
  
  const changeState = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    })
  }

  return (
    <Fragment>
      <div className="register container">
        <Card>
          <CardTitle><h2 className="text-center mt-3">Daftar</h2></CardTitle>
          <CardBody>
            <div className="content-section">
              <form action="/register" method="POST">
                <fieldset className="form-group register-field">
                <div className="form-group">
                    <input type="text" placeholder="Nama Lengkap" name="name" id="name" onChange={(e) => changeState(e)}/>
                    
                  </div>
                  <div className="form-group">
                    <input type="number" placeholder="NIP" name="nip" id="nip" onChange={(e) => changeState(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Jabatan" name="pos" id="pos" onChange={(e) => changeState(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Nama Atasan Langsung" name="bossName" id="bossName" onChange={(e) => changeState(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Jabatan Atasan Langsung" name="bossPos" id="bossPos" onChange={(e) => changeState(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Kota/Kabupaten" name="city" id="city" onChange={(e) => changeState(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="password" placeholder="Kata sandi" name="password" id="password" onChange={(e) => changeState(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="password" placeholder="Konfirmasi Kata sandi" name="confirmPassword" id="confirmPassword" onChange={(e) => changeState(e)}/>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary submit" onClick={(e) => {
                      e.preventDefault();
                      }}>Daftar</button>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="border-top pt-3">
              <small className="text-muted">Sudah punya akun ? <a href="/login" className="ml-2">Masuk di sini !</a></small>
            </div>
          </CardBody>
        </Card>
      </div>
    </Fragment>
  )
}

export default Register;