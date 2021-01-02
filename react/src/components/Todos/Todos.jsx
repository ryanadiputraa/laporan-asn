import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import './Todos.css';
import { SET_DATE } from '../../utils/redux/Action';

const Todos = (props) => {

  const dateConvert = e => {
    let fullDate = e.target.value;

    // date
    let date = [];
    for (let i = 8; i < 10; i++) {
      date.push(fullDate[i]);
    }
    date = date.join('');

    // year
    let year = [];
    for (let i = 0; i < 4; i++) {
      year.push(fullDate[i])
    }
    year = year.join('');

    // month
    let month = []
    for (let i = 5; i < 7; i++) {
      month.push(fullDate[i]);
    }
    month = month.join('');
    if (month === "01") month = "Januari";
    else if (month === "02") month = "Februari";
    else if (month === "03") month = "Maret";
    else if (month === "04") month = "April";
    else if (month === "05") month = "Mei";
    else if (month === "06") month = "Juni";
    else if (month === "07") month = "Juli";
    else if (month === "08") month = "Agustus";
    else if (month === "09") month = "September";
    else if (month === "10") month = "Oktober";
    else if (month === "11") month = "November";
    else month = "Desember";

    // new full Date
    fullDate = [date, month, year].join('-');
    return fullDate;
  }

  return (
    <div className="todos">
      <TodoList />
      <div className="date-container">
        <label htmlFor="date" id="date-label">Tanggal laporan :</label>
        <input type="date" id="date" onChange={(e) => {
          props.setDate(dateConvert(e))
        }} />
      </div>
      <AddTodo />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setDate: date => dispatch(SET_DATE(date))
})

export default connect(null, mapDispatchToProps)(Todos);