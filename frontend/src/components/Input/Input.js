import React from 'react';
import App from '../../App';

import './Input.css';


const Input = ({id,label, type, step, value, onChange}) => {
  return (
    <div className="input">
      <label htmlFor={id}> {label} </label>
      <input
        type={type}
        step={step}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default App;