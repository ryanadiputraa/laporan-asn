import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../Pages/Home/Home';
import './App.css';
import { connect } from 'react-redux';
import { CLOSE_ALERT } from '../../utils/redux/Action';

function App(props) {

  console.log(props)

  let errorsAlert = <div className="no-errors"></div>

  if (props.state.alert === 0) {
    errorsAlert = (<div className="no-errors"></div>)
  } else if (props.state.alert === 1) {
    errorsAlert = (
      <div className="errors-alert">
        <div className="close-alert" onClick={() => props.closeAlert()}>x</div>
        <div className="error-msg"><p>Mohon isi Data ASN</p></div>
      </div>
    )
  } else if (props.state.alert === 2) {
    errorsAlert = (
      <div className="errors-alert">
        <div className="close-alert" onClick={() => props.closeAlert()}>x</div>
        <div className="error-msg"><p>Daftar uraian kegiatan kosong! Silahkan isi uraian kegiatan anda</p></div>
      </div>
    )
  }


  return (
    <Fragment>
      <div className="App">
        {errorsAlert}
        <Home />
      </div>
    </Fragment>
  );
}

const mapStatetoProps = state => ({ state })

const mapDispatchToProps = dispatch => ({
  closeAlert: () => dispatch(CLOSE_ALERT())
})

export default connect(mapStatetoProps, mapDispatchToProps)(App);
