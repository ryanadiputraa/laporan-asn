import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardBody } from 'reactstrap';
import './AddTodo.css';

class AddTodo extends Component {

  state = {
    id: 1,
    startTime: null,
    endTime: null,
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

  render() {
    return(
        <div className="form">
          <Card className="todos-container">
            <CardBody>
              <CardTitle><h3 className="text-center">Agenda Kegiatan</h3></CardTitle>
              <div className="todos-field">
                <label htmlFor="time" className="time-label">Waktu:</label>
                <input type="time" id="startTime" onChange={ this.setInputtoState }/>
                <span className="split-time">-</span>
                <input type="time" id="endTime" onChange={ this.setInputtoState }/>
                <textarea id="todo" cols="30" rows="3" placeholder="uraian kegiatan..." onChange={ this.setInputtoState }/>
                <input type="text" placeholder="keterangan" id="info" onChange={ this.setInputtoState }/>
                <button className="btn btn-primary add-todo" onClick={() => {
                  this.generateNewId();
                  this.props.addTodos(this.state);
                }}>Tambah</button>
              </div>
            </CardBody>
          </Card>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodos: todos => dispatch({ type: 'ADD_TODO', input: todos })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);