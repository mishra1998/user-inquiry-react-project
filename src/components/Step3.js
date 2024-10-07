import React from 'react';
import RadioInput from './RadioInput';

const Step3 = ({ formData, handleChange }) => (
  <div>
    <h2>Step 3: Preferences</h2>
    <RadioInput
      label="Contact Preference"
      name="contactPreference"
      options={[
        { value: 'email', label: 'Email' },
        { value: 'phone', label: 'Phone' },
      ]}
      value={formData.contactPreference || ''}
      onChange={handleChange}
    />
  </div>
);

export default Step3;
