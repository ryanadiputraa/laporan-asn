import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import './Todos.css';
import { SET_DATE } from '../../utils/redux/Action';

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

const mapDispatchToProps = dispatch => ({
  setDate: date => dispatch(SET_DATE(date)) 
})

export default connect(null, mapDispatchToProps)(Todos);