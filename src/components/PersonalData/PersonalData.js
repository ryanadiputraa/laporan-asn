import React, {useState} from 'react';
import './PersonalData.css';
import { Alert, Card, CardTitle, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { SET_DATA } from '../../utils/redux/Action';

function PersonalData(props) {

  let [state, setState] = useState({
    name: '',
    NIP: '',
    pos: '',
    bossName: '',
    bossPos: '',
    city: ''
  })

  const setData = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    })
  }

  const checkData = () => {
    if(state.name === '' || state.NIP === '' || state.pos === '' || state.bossName === '' || state.bossPos === '' || state.city === '') {
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
            props.savePersonalData(state);
          }}>SIMPAN</button>
        </form>
      </CardBody>
    </Card> 
  )
}

const mapDispatchToProps = dispatch => ({
  savePersonalData: data => dispatch(SET_DATA(data)) 
})

export default connect(null, mapDispatchToProps)(PersonalData);