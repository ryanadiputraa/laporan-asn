import React, { Component } from 'react';
import './PersonalData.css';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import ActionType from '../../utils/redux/ActionType';

class PersonalData extends Component {
  
  state = {
    name: null,
    NIP: null,
    pos: null,
    bossName: null,
    bossPos: null
  }
  
  setInputtoState = (e) => {
    let stateName = e.target.id;
    let stateValue = e.target.value;
    this.setState({
      [stateName]: stateValue
    })
  }

  render() {
    return(
      <Card className="personal-data-container mt-3">
        <CardBody>
          <CardTitle><h3 className="text-center">Data PNS</h3></CardTitle>
          <form >
            <input type="text" placeholder="Nama" id="name" onChange={ this.setInputtoState } />
            <input type="number" placeholder="NIP" id="NIP" onChange={ this.setInputtoState }/>
            <input type="text" placeholder="Jabatan" id="pos" onChange={ this.setInputtoState }/>
            <input type="text" placeholder="Nama atasan langsung" id="bossName" onChange={ this.setInputtoState }/>
            <input type="text" placeholder="Jabatan atasan langsung" id="bossPos" onChange={ this.setInputtoState }/>
            <button className="btn btn-primary" onClick={(e) => {
                e.preventDefault();
                this.props.savePersonalData(this.state);
                console.log(this.props)
              }}>SIMPAN</button>
          </form>
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    savePersonalData: (input) => dispatch({ type: ActionType.ADD_DATA, input: input })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData);