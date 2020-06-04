import React from 'react';
import PersonalData from '../../../components/PersonalData/PersonalData';
import Todos from '../../../components/Todos/Todos';

const InputFields = () => {
  return(
    <div className="input-fields container" style={{ padding: '0' }}>
      <PersonalData />
      <Todos />
    </div>  
  )
}

export default InputFields;