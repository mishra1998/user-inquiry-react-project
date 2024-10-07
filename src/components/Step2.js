import React from 'react';
import SelectInput from './SelectInput';

const Step2 = ({ formData, handleChange }) => (
  <div>
    <h2>Step 2: Location</h2>
    <SelectInput
      label="Country"
      name="country"
      value={formData.country || ''}
      options={[
        { value: '', label: 'Select Country' },
        { value: 'US', label: 'United States' },
        { value: 'CA', label: 'Canada' },
      ]}
      onChange={handleChange}
    />
  </div>
);

export default Step2;
