import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardBody } from 'reactstrap';
import './AddTodo.css';
import { ADD_TODO } from '../../utils/redux/Action';

function AddTodo(props) {

  const [state, setState] = useState({
    id: 1,
    time: null,
    todo: null,
    info: null
  })

  const setInputtoState = (e) => {
    let stateName = e.target.id;
    let stateValue = e.target.value;
    setState({
      ...state,
      [stateName]: stateValue
    })
  }

  const generateNewId = () => {
    setState({
      ...state,
      id: state.id + 1
    })
  }

  const clearInput = (...inputs) => {
    inputs.map(input => input.value = '')
  }

  return(
    <Card className="todos-container">
      <CardBody>
        <CardTitle><h3 className="text-center">Agenda Kegiatan</h3></CardTitle>
        <div className="todos-field">
          <label htmlFor="time" className="time-label">Waktu:</label>
          <input type="time" id="time" onChange={ setInputtoState }/>     
          <textarea id="todo" cols="30" rows="4" placeholder="uraian kegiatan..." onChange={ setInputtoState }/>
          <input type="text" placeholder="keterangan" id="info" onChange={ setInputtoState }/>
          <button className="btn btn-primary add-todo" onClick={() => {
            window.scrollTo(0, 540);
            generateNewId();
            props.addTodos(state);
            clearInput(
              document.querySelector('#time'),
              document.querySelector('#todo'),
              document.querySelector('#info')
              )
            }}>Tambah</button>
        </div>
      </CardBody>
    </Card>
  )
}

const mapDispatchToProps = dispatch => ({
  addTodos: todo => dispatch(ADD_TODO(todo))
})
export default connect(null, mapDispatchToProps)(AddTodo);