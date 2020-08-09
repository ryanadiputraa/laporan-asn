import React, {Fragment, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import { Alert, Card, CardTitle, CardBody } from 'reactstrap';


const Login = () => {

  useEffect(() => {
    if (window.error_message !== 'None') {
      setValid('danger');
      setMessage(window.error_message);
      setVisible(true);
      window.error_message = 'None'
    }
  }, [])

  const [valid, setValid] = useState();
  const [validMessage, setMessage] = useState();

  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);

  return (
    <Fragment>
      <div className="login container mt-4">
        <Card>
        <Alert
          style={{ "transition": ".3s" }}
          color={valid}
          isOpen={visible}
          toggle={onDismiss}><p
            className="text-center mb-0"
          >{validMessage}</p>
        </Alert>
          <CardTitle><h2 className="text-center mt-3">Login</h2></CardTitle>
          <CardBody>
            <div className="content-section">
              <form action="/login" method="POST">
                <fieldset className="form-group">
                  <input type="text" name="formtype" id="formtype" defaultValue="login" style={{ 'display':'none' }}/>
                  <div className="form-group">
                    <input type="number" placeholder="NIP" name="nip" id="nip"/>
                  </div>
                  <div className="form-group">
                    <input type="password" placeholder="Kata sandi" name="password" id="password"/>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" name="remember" id="remember"/>
                    <label for="remember" className="form-check-label">Tetap masuk</label>
                  </div>
                </fieldset>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary submit">Masuk</button>
                </div>
                <small className="text-muted ml-2">
                  <a href="#">Lupa sandi ?</a>
                </small>
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