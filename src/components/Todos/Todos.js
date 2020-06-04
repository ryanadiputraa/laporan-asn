import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import './Todos.css';

class Todos extends Component {
  render() {
    return(
      <form>
        <label htmlFor="date" id="date-label">Tanggal laporan :</label>
        <input type="date" id="date"/>
        <Card className="todos-container">
          <CardBody>
            <CardTitle><h3 className="text-center">Agenda Kegiatan</h3></CardTitle>
            <div className="todos-field">
              <label htmlFor="time" className="time-label">Waktu:</label>
              <input type="time" className="start-time"/><span className="split-time">-</span><input type="time" className="end-time"/>
              <textarea id="todo" cols="30" rows="3" placeholder="uraian kegiatan..."></textarea>
              <input type="text" placeholder="keterangan" className="info"/>
              <button className="btn btn-primary add-todo">Tambah</button>
            </div>
          </CardBody>
        </Card>
      </form>
    )
  }
}

export default Todos;