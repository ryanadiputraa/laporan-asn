import React, {Fragment, useEffect, useState} from 'react';
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

  const BASE_URL = 'http://127.0.0.1:5000'
  const loginUser = () => {
    fetch('http://127.0.0.1:5000/login/123456789123456789/password', 
    // {
    //   mode: 'no-cors',
    //   method: 'GET',
    //   headers: {
    //     'Accept' : 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json'
    //   }
    // }
    )
    // fetch('http://127.0.0.1:5000/login/123456789123456789/password')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    if (window.message.length) {
      setValid('danger');
      setMessage(window.message);
      setVisible(true);
      window.message = 'None'
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
                    <input type="number" placeholder="NIP" name="nip" id="nip" onChange={(e) => changeState(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="password" placeholder="Kata sandi" name="password" id="password" onChange={(e) => changeState(e)}/>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" name="remember" id="remember"/>
                    <label for="remember" className="form-check-label">Tetap masuk</label>
                  </div>
                </fieldset>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary submit" onClick={(e) => {
                    loginUser();
                    e.preventDefault();
                    }}>Masuk</button>
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