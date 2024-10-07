import React, { useState } from 'react';
import './App.css';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData)

  const submitForm = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Form submitted successfully:', result);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };
  

  return (
    <div className="inquiry-container">
      <div className="form-section">
        {currentStep === 1 && <Step1 formData={formData} handleChange={handleChange} />}
        {currentStep === 2 && <Step2 formData={formData} handleChange={handleChange} />}
        {currentStep === 3 && <Step3 formData={formData} handleChange={handleChange} />}
        
        <div className="navigation-buttons">
          {currentStep > 1 && <button onClick={prevStep}>Back</button>}
          {currentStep < 3 && <button onClick={nextStep}>Next</button>}
          {currentStep === 3 && <button onClick={submitForm}>Submit</button>}
        </div>
      </div>
      <div className="image-section">
        <img src="	https://airpay.money/assets/images-v2/gif-v2/comprehensive/Financial-health-score-CFP.gif" alt="Inquiry Form" />
      </div>
    </div>
  );
};

export default App;
