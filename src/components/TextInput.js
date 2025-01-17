import React from 'react';

const TextInput = ({ label, name, value, onChange }) => (
  <div className="input-group">
    <label>{label}</label>
    <input type="text" name={name} value={value} onChange={onChange} />
  </div>
);

export default TextInput;
