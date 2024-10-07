import React from 'react';

const SelectInput = ({ label, name, options, value, onChange }) => (
  <div className="input-group">
    <label>{label}</label>
    <select name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
