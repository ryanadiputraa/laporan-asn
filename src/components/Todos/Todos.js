import React, { Component } from 'react';
import { connect } from 'react-redux';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import './Todos.css';

class Todos extends Component {

  state = {
    todos: []
  }
  
  setDateInput = (e) => {
    let stateValue = e.target.value;
    this.props.setDate(stateValue);
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
    this.props.addTodos(state);
  }

  printPDF = (state) => {
    const doc = new jsPDF('landscape');
    const formData = this.props.state;
    let bodyData = [];
    let i = 0;

    formData.todos.map(todo => {
      bodyData[i] = [todo.id, '', `${todo.startTime} - ${todo.endTime}`, todo.todo, todo.info];
      i++;
    })
    bodyData[0] = [formData.todos[0].id, formData.date, `${formData.todos[0].startTime} - ${formData.todos[0].endTime}`, formData.todos[0].todo, formData.todos[0].info]

    doc.autoTable({
      head: [['No','Tanggal','Waktu','Uraian Kegiatan','Keterangan','Validasi Pimpinan']],
      body: bodyData
    })

    doc.save(formData.date);
    
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
    addTodos: todos => dispatch({ type: 'ADD_TODO', input: todos }),
    setDate: date => dispatch({ type: 'SET_DATE', input: date })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);