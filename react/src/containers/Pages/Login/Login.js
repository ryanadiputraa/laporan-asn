import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import { Card, CardTitle, CardBody } from 'reactstrap';


const Login = () => {
  return (
    <Fragment>
      <div className="login container mt-4">
        <Card>
          <CardTitle><h2 className="text-center mt-3">Login</h2></CardTitle>
          <CardBody>
            <div className="content-section">
              <form action="/" method="POST">
                <fieldset className="form-group">
                  <div className="form-group">
                    <input type="text" placeholder="NIP Pegawai" name="nip" id="nip"/>
                    <div className="invalid-feedback">
                      <span></span>
                    </div> 
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Kata sandi" name="password" id="password"/>
                    <div className="invalid-feedback">
                      <span></span>
                    </div>
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