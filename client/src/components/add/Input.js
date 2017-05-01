import React from 'react';

const Input = (props) =>
<div className="form-item">
  <label htmlFor={props.name}>{props.label}</label>
  <input name={props.name} type="text"
    value={props.value}
    onChange={props.change}/>
</div>;

export default Input;
