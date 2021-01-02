import React, {Fragment, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import { Alert, Card, CardTitle, CardBody } from 'reactstrap';

const Login = () => {

  const [state, setState] = useState({
    nip : '',
    password : ''
  });
  
  const changeState = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    })
  }

  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);

  return (
    <Fragment>
      <div className="login container mt-4">
        <Card>
          <Alert color="danger" isOpen={visible} toggle={onDismiss} fade={false}>
            Gagal masuk! mohon periksa kembali NIP dan password
          </Alert>
          <CardTitle><h2 className="text-center mt-3">Masuk</h2></CardTitle>
          <CardBody>
            <div className="content-section">
              <form action="/login" method="POST">
                <fieldset className="form-group login-field">
                  <div className="form-group">
                    <input type="number" placeholder="NIP" name="nip" id="nip" onChange={(e) => changeState(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="password" placeholder="Kata sandi" name="password" id="password" onChange={(e) => changeState(e)}/>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary submit" onClick={(e) => {
                      e.preventDefault();
                      }}>Masuk</button>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="border-top pt-3">
              <small className="text-muted">Belum punya akun ? <a href="/register" className="ml-2">Daftar di sini !</a></small>
            </div>
          </CardBody>
        </Card>
      </div>
    </Fragment>
  )
}

export default Login;