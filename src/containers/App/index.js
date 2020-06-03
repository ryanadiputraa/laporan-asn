import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from '../../components/Header/Header';
import PersonalData from '../../components/PersonalData/PersonalData'
import { connect } from 'react-redux';
import Todos from '../../components/Todos/Todos';

function App(props) {
  return (
    <div className="container text-center">
      <Header />
      <PersonalData />
      <Todos />
    </div>
  );
}

const mapStateToProps = state => ({
  Data: state
})

export default connect(mapStateToProps)(App);
