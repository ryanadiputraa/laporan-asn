import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import ActionType from '../../utils/redux/ActionType';
import './Todos.css';

class Todos extends Component {

  state = {
      id: 0,
      date: null,
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

  render() {
    return(
      <div className="form">
        <label htmlFor="date" id="date-label">Tanggal laporan :</label>
        <input type="date" id="date" onChange={ this.setInputtoState }/>
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
              <button className="btn btn-primary add-todo" onClick={(e) => {
                e.preventDefault();
                this.props.addTodo(this.state);
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
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (input) => dispatch({ type: ActionType.ADD_TODOS, input: input })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);