import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardBody } from 'reactstrap';
import './AddTodo.css';
import { ADD_TODO } from '../../utils/redux/Action';

class AddTodo extends Component {

  state = {
    id: 1,
    time: null,
    todo: null,
    info: null
  }

  setInputtoState = (e) => {
    let stateName = e.target.id;
    let stateValue = e.target.value;
    this.setState({
      [stateName]: stateValue
    })
  }

  generateNewId = () => {
    this.setState({ id: this.state.id + 1 })    
  }

  clearInput = (...inputs) => {
    inputs.map(input => input.value = '')
  }

  render() {
    return(
          <Card className="todos-container">
            <CardBody>
              <CardTitle><h3 className="text-center">Agenda Kegiatan</h3></CardTitle>
              <div className="todos-field">
                <label htmlFor="time" className="time-label">Waktu:</label>
                <input type="time" id="time" onChange={ this.setInputtoState }/>     
                <textarea id="todo" cols="30" rows="4" placeholder="uraian kegiatan..." onChange={ this.setInputtoState }/>
                <input type="text" placeholder="keterangan" id="info" onChange={ this.setInputtoState }/>
                <button className="btn btn-primary add-todo" onClick={() => {
                  window.scrollTo(0, 540);
                  this.generateNewId();
                  this.props.addTodos(this.state);
                  this.clearInput(
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
}

const mapDispatchToProps = dispatch => ({
  addTodos: todo => dispatch(ADD_TODO(todo))
})

export default connect(null, mapDispatchToProps)(AddTodo);