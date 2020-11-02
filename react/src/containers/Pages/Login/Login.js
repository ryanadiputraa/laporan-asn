import React, {Fragment, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import { Alert, Card, CardTitle, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { SET_DATA } from '../../../utils/redux/Action';



const Login = (props) => {

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
  const loginUser = (props) => {
    fetch(`${BASE_URL}/login/${state.nip}/${state.password}`)
    .then(res => res.json())
    .then(res => {
      props.savePersonalData({
        name: res.name,
        NIP: res.nip,
        pos: res.position,
        bossName: res.boss_name,
        bossPos: res.boss_position,
        city: res.region,
        message: res.message
      })
      if(!res.message) props.history.push('/');
      else setVisible(true);
    })
    .catch(err => alert(err))
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
                  <button className="btn btn-primary submit" onClick={(e) => {
                    loginUser(props);
                    e.preventDefault();
                    }}>Masuk</button>
                </div>
                {/* <small className="text-muted ml-2">
                  <a href="#">Lupa sandi ?</a>
                </small> */}
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

const mapDispatchToProps = dispatch => ({
  savePersonalData: data => dispatch(SET_DATA(data))
})

export default connect(null, mapDispatchToProps)(Login);