import React, {Fragment, useState, useRef, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Register.css';
import { Card, CardTitle, CardBody } from 'reactstrap';

const Register = () => {

  const [state, setState] = useState({
    name: '',
    nip : 0,
    pos: '',
    bossName: '',
    bossPos: '',
    city: '',
    password : '',
    confirmPassword: ''
  });
  
  const registerAccount = () => {
    console.log(state);
  }

  const changeState = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    });
  }

  useEffect(() => {
    const isDataValid = () => {
      state.name.length !== 0 && state.nip.length === 18 && state.pos.length !== 0 && state.bossName.length !== 0 && state.bossPos.length !== 0 && state.city.length !== 0 && state.password.length > 0 && state.confirmPassword.length > 0 && state.password === state.confirmPassword ? (
        registerButtonRef.current.disabled = false
      ) : (
        registerButtonRef.current.disabled = true
      )
    }
    isDataValid();
  }, [state])


  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const nipFeedbackRef = useRef();
  const passwordFeedbackRef = useRef();
  const confirmPasswordFeedbackRef = useRef();
  const registerButtonRef = useRef();

  const displayFeedback = feedback => feedback.style.display = 'inline-block';
  const hideFeedback = feedback => feedback.style.display = 'none';

  const isNipValid = e => {
    e.target.value.length === 18 ? hideFeedback(nipFeedbackRef.current) : displayFeedback(nipFeedbackRef.current);
  }

  const isPasswordValid = e => {
    e.target.value.length >= 8 ? hideFeedback(passwordFeedbackRef.current) : displayFeedback(passwordFeedbackRef.current);
  }

  const isPasswordMatch = () => {
    passwordRef.current.value === confirmPasswordRef.current.value ? (
      confirmPasswordFeedbackRef.current.style.display = 'none'
    ) : (confirmPasswordFeedbackRef.current.style.display = 'inline-block');
  }

  return (
    <Fragment>
      <div className="register container">
        <Card>
          <CardTitle><h2 className="text-center mt-3">Daftar</h2></CardTitle>
          <CardBody>
            <div className="content-section">
              <form>
                <fieldset className="form-group register-field">
                  <div className="form-group">
                    <input type="text" placeholder="Nama Lengkap" name="name" id="name" onChange={e => changeState(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="number" placeholder="NIP" min="0" name="nip" id="nip" onChange={e => {
                      changeState(e);
                      isNipValid(e);
                    }}/>
                    <div className="invalid-feedback" id="nip-feedback" ref={nipFeedbackRef}>
                      <span><span>Panjang NIP adalah 18 digit</span></span>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Jabatan" name="pos" id="pos" onChange={e => changeState(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Nama Atasan Langsung" name="bossName" id="bossName" onChange={e => changeState(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Jabatan Atasan Langsung" name="bossPos" id="bossPos" onChange={e => changeState(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Kota/Kabupaten" name="city" id="city" onChange={e => changeState(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="password" ref={passwordRef} placeholder="Kata sandi" name="password" id="password" onChange={e => {
                      changeState(e);
                      isPasswordValid(e);
                      isPasswordMatch();
                    }}/>
                    <div className="invalid-feedback" id="password-feedback" ref={passwordFeedbackRef}>
                      <span>Minimal 8 karakter</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="password" ref={confirmPasswordRef} placeholder="Konfirmasi Kata sandi" name="confirmPassword" id="confirmPassword" onChange={e => {
                      changeState(e);
                      isPasswordMatch();
                    }}/>
                    <div className="invalid-feedback" id="confirmPassword-feedback" ref={confirmPasswordFeedbackRef}>
                      <span>Kata sandi berbeda</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary submit" ref={registerButtonRef} disabled={!state.isValid} onClick={registerAccount}>Daftar</button>
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