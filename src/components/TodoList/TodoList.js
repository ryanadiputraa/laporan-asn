import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardBody } from 'reactstrap';
import './TodoList.css';
import { DELETE_TODO, PRINT_PDF } from '../../utils/redux/Action';

const TodosList = (props) => {

  const todos = props.state.todos;

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="todo-list-item" key={todo.id}>
          <div className="todo-item">
            <span className="time">{todo.time}</span>
            <span className="todo">{todo.todo}</span>
            <span className="info">({todo.info})</span>
          </div>
          <div className="delete-item">
            <button onClick={() => props.deleteTodo(todo.id)} className="btn btn-danger delete-btn">HAPUS</button>
          </div>
        </div>
      )
    })
  ) : (
      <p className="empty-todo">Sikahkan isi uraian kegiatan pada kolom agenda kegiatan di bawah</p>
    )

  const validData = state => {
    if (state.name !== null || state.NIP !== null || state.pos !== null || state.bossName !== null || state.bossPos !== null || state.city !== null) {
      return true
    }
    return false
  }

  return (
    <div className="todo-list-container">
      <Card>
        <CardBody className="todos-card">
          <CardTitle><h3 className="text-center">Daftar Uraian Kegiatan</h3></CardTitle>
          {todoList}
          <button className="btn btn-danger print-btn" onClick={() => {
            if (validData(props.state.data)) props.printPDF();
            else alert('Mohon isi data ASN');
          }}>Cetak PDF</button>
        </CardBody>
      </Card>
    </div>
  )
}

const mapStateToProps = state => ({ state })

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(DELETE_TODO(id)),
  printPDF: () => dispatch(PRINT_PDF())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);