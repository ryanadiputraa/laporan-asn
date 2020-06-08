import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import './TodoList.css';

const TodosList = ({ todos, deleteTodo, printPDF }) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="todo-list-item" key={ todo.id }>
          <div className="todo-item">
            <span className="time">{ todo.startTime } - { todo.endTime }</span>
            <span className="todo">{ todo.todo }</span>
            <span className="info">({ todo.info })</span>
          </div>
          <div className="delete-item">
            <button onClick={() => deleteTodo(todo.id) } className="btn btn-danger delete-btn">HAPUS</button>
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
          <button className="btn btn-danger print-btn" onClick={() => printPDF(todos)}>Cetak PDF</button> 
        </CardBody>
      </Card>
    </div>
  )
}

export default TodosList;