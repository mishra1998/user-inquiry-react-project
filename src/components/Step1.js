import React from 'react';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import RadioInput from './RadioInput';

const Step1 = ({ formData, handleChange }) => (
  <div>
    <h2>Step 1: Personal Details</h2>
    <TextInput
      label="First Name"
      name="firstName"
      value={formData.firstName || ''}
      onChange={handleChange}
    />
    <TextInput
      label="Last Name"
      name="lastName"
      value={formData.lastName || ''}
      onChange={handleChange}
    />
      <SelectInput
      label="Maritual status"
      name="MaritualStatus"
      value={formData.country || ''}
      options={[
        { value: 'Married', label: 'Married' },
        { value: 'UnMarried', label: 'UnMarried' },
        { value: 'Other', label: 'Other' },
      ]}
      onChange={handleChange}
    />
     <RadioInput
      label="Gender"
      name="gender"
      options={[
        { value: 'male', label: 'male' },
        { value: 'female', label: 'female' },
      ]}
      value={formData.gender || ''}
      onChange={handleChange}
    />
  </div>
);

export default Step1;
