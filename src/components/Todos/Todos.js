import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import './Todos.css';

const Todos = (props) => {

  return(
    <div className="todos">
      <TodoList />
      <div className="date-container">
        <label htmlFor="date" id="date-label">Tanggal laporan :</label>
        <input type="date" id="date" onChange={(e) => props.setDate(e.target.value) }/>
      </div>
      <AddTodo/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDate: date => dispatch({ type: 'SET_DATE', input: date })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);