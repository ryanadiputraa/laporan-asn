import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import { Card, CardTitle, CardBody } from 'reactstrap';


const Login = () => {
  return (
    <Fragment>
      <div class="login container mt-4">
        <Card>
          <CardTitle><h2 className="text-center mt-3">Login</h2></CardTitle>
          <CardBody>
            <div class="content-section">
              <form action="" method="POST">
                <fieldset class="form-group">
                  <div class="form-group">
                    <input type="text" placeholder="NIP Pegawai" name="nip" id="nip"/>
                    <div class="invalid-feedback">
                      <span></span>
                    </div> 
                  </div>
                  <div class="form-group">
                    <input type="text" placeholder="Kata sandi" name="password" id="password"/>
                    <div class="invalid-feedback">
                      <span></span>
                    </div>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="remember" id="remember"/>
                    <label for="remember" class="form-check-label">Tetap masuk</label>
                  </div>
                </fieldset>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary submit">Masuk</button>
                </div>
                <small class="text-muted ml-2">
                  <a href="#">Lupa sandi ?</a>
                </small>
              </form>
            </div>
            <div class="border-top pt-3">
              <small class="text-muted">Belum punya akun ? <a href="/register" class="ml-2">Daftar di sini !</a></small>
            </div>
          </CardBody>
        </Card>
      </div>
    </Fragment>
  )
}

export default Login;