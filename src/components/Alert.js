import React, { useContext } from 'react';

import ToDoContext from '../context/todoContext';

const Alert = () => {

  const todoContext = useContext(ToDoContext);

  const {alert} = todoContext;

  return  (
    alert &&
    <div className={`alert alert-${alert.type}`}>
      <h2>{alert.msg}</h2>
    </div>
    
  )
}

export default Alert
