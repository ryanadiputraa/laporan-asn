import React, {useState} from 'react';
import './PersonalData.css';
import { Alert, Card, CardTitle, CardBody } from 'reactstrap';
import { connect } from 'react-redux';

function PersonalData(props) {

  let [data, setData] = useState({});
  setData = (e) => {
    data[e.target.id] = e.target.value
  }

  const checkData = () => {
    if(data.name === undefined || data.name === '' || data.NIP === undefined || data.NIP === '' || data.pos === undefined || data.pos === '' || data.bossName === undefined || data.bossName === '' || data.bossPos === undefined || data.bossPos === '' || data.city === undefined || data.city === '') {
      setValid('danger');
      setMessage('Mohon isi data ASN dengan lengkap');
    } else {
      setValid('success');
      setMessage('Data ASN tersimpan');
    }
    setVisible(true);
  }
  
  const[valid, setValid] = useState();

  const[validMessage, setMessage] = useState();

  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);

  return(
    <Card className="personal-data-container">
      <CardBody>
        <Alert color={valid} isOpen={visible} toggle={onDismiss}><p className="text-center mb-0">{ validMessage }</p></Alert>
        <CardTitle><h3 className="text-center">Data ASN</h3></CardTitle>
        <form >
          <input type="text" placeholder="Nama" id="name" onChange={(e) => setData(e) } />
          <input type="number" placeholder="NIP" id="NIP" onChange={(e) => setData(e) }/>
          <input type="text" placeholder="Jabatan" id="pos" onChange={(e) => setData(e) }/>
          <input type="text" placeholder="Nama atasan langsung" id="bossName" onChange={(e) => setData(e) }/>
          <input type="text" placeholder="Jabatan atasan langsung" id="bossPos" onChange={(e) => setData(e) }/>
          <input type="text" placeholder="Kota" id="city" onChange={(e) => setData(e) } />
          <button className="btn btn-primary" onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
            checkData();
            props.savePersonalData(data);
          }}>SIMPAN</button>
        </form>
      </CardBody>
    </Card> 
  )
}

const mapStateToProps = state => {
  return {
    state: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    savePersonalData: (input) => dispatch({ type: 'SET_DATA', input: input })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData);