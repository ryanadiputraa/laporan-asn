import React, { Component } from 'react';
import { connect } from 'react-redux';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import './Todos.css';

class Todos extends Component {

  state = {
    date: "",
    todos: [
      {
        id: 1, 
        startTime: "12:00",
        endTime: "13:00",
        todo: "Melaksanakan tugas lainnya",
        info: "camat"
      }
    ]
  }
  
  setDateInput = (e) => {
    let stateName = e.target.id;
    let stateValue = e.target.value;
    this.setState({
      [stateName]: stateValue
    })
  }
   
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({ todos })
  }

  submitTodo = (state) => {
    let newState = [...this.state.todos, state]
    this.setState({ todos: newState });
    this.props.addTodos(this.state);
  }

  printPDF = (state) => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Tanggal','Waktu','Uraian Kegiatan','Keterangan']],
      body: []
    })
    doc.save(this.state.date);
  }

  render() {
    return(
      <div className="todos">
        <TodoList todos={ this.state.todos } deleteTodo={ this.deleteTodo } printPDF={this.printPDF}/>
        <div className="date-container">
          <label htmlFor="date" id="date-label">Tanggal laporan :</label>
          <input type="date" id="date" onChange={ this.setDateInput }/>
        </div>
        <AddTodo submitTodo={ this.submitTodo }/>
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
    addTodos: state => dispatch({ type: 'ADD_TODO', input: state })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);