import React, {useState} from 'react';
import './PersonalData.css';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { connect } from 'react-redux';

function PersonalData(props) {

  let [data, setData] = useState({});
  setData = (e) => {
    data[e.target.id] = e.target.value
  }

  return(
    <Card className="personal-data-container">
      <CardBody>
        <CardTitle><h3 className="text-center">Data PNS</h3></CardTitle>
        <form >
          <input onClick={() => console.log(props.state) } type="text" placeholder="Nama" id="name" onChange={(e) => setData(e) } />
          <input type="number" placeholder="NIP" id="NIP" onChange={(e) => setData(e) }/>
          <input type="text" placeholder="Jabatan" id="pos" onChange={(e) => setData(e) }/>
          <input type="text" placeholder="Nama atasan langsung" id="bossName" onChange={(e) => setData(e) }/>
          <input type="text" placeholder="Jabatan atasan langsung" id="bossPos" onChange={(e) => setData(e) }/>
          <input type="text" placeholder="Kota" id="city" onChange={(e) => setData(e) } />
          <button className="btn btn-primary" onClick={(e) => {
            e.preventDefault();
            props.savePersonalData(data);
          }}>SIMPAN</button>
        </form>
      </CardBody>
    </Card> 
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    savePersonalData: (input) => dispatch({ type: 'SET_DATA', input: input })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData);