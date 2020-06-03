import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

class Todos extends Component {
  render() {
    return(
      <Card>
        <CardBody>
          <CardTitle><h3>Agenda Kegiatan</h3></CardTitle>
        </CardBody>
      </Card>
    )
  }
}

export default Todos;