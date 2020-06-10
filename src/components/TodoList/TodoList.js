import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardBody } from 'reactstrap';
import './TodoList.css';

const TodosList = (props) => {

  const todos = props.state.todos;

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="todo-list-item" key={ todo.id }>
          <div className="todo-item">
            <span className="time">{ todo.time }</span>
            <span className="todo">{ todo.todo }</span>
            <span className="info">({ todo.info })</span>
          </div>
          <div className="delete-item">
            <button onClick={() => props.deleteTodo(todo.id) } className="btn btn-danger delete-btn">HAPUS</button>
          </div>
        </div>
      )
    })
  ) : (
    <p className="empty-todo">Sikahkan isi uraian kegiatan pada kolom agenda kegiatan di bawah</p>
  )

  return(
    <div className="todo-list-container">
      <Card>
        <CardBody className="todos-card">
          <CardTitle><h3 className="title">Daftar uraian kegiatan</h3></CardTitle>
          { todoList }
          <button className="btn btn-danger print-btn" onClick={() => props.printPDF()}>Cetak PDF</button> 
        </CardBody>
      </Card>
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
    deleteTodo: id => dispatch({ type: 'DELETE_TODO', input: id }),
    printPDF: () => dispatch({ type: 'PRINT_PDF' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);