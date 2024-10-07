import React from 'react';

const RadioInput = ({ label, name, options, value, onChange }) => (
  <div className="input-group">
    <label>{label}</label>
    {options.map((option) => (
      <label key={option.value}>
        <input
          type="radio"
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={onChange}
        />
        {option.label}
      </label>
    ))}
  </div>
);

export default RadioInput;
