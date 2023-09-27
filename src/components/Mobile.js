import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topdesign from './Topdesign';
import user from '../images/user.png';

export default function Mobile() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');

  const handleGetOTP = (e) => {
    e.preventDefault();
  
    // Validate the phone number
    const phoneRegex = /^[0-9]{10}$/;
  
    if (!phoneRegex.test(mobileNumber)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
  
    // Clear any previous error messages
    setError('');
  
    // Navigate to Profile and pass fullName as state
    navigate('/Profile', { state: { fullName } });
  };
  

  // Determine if the "Get OTP" button should be disabled based on phone number validity
  const isButtonDisabled = !mobileNumber.match(/^[0-9]{10}$/);

  return (
    <>
      <div style={{ backgroundColor: "#D9FBEE", minHeight: "100vh" }}>
        <Topdesign />

        <div className="mobile-number" style={{ textAlign: "center", marginTop: "2rem", marginBottom: "1rem" }}>Enter Your Full Name</div>
        <div className='d-flex justify-content-center align-items-center'>
          <div class="form-floating">
            <input
              type="text"
              class="form-control wider-input"
              id="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label for="fullName"><img className="image" src={user} alt="" />Full Name</label>
          </div>
        </div>
        <div className="mobile-number" style={{ textAlign: "center", marginTop: "2rem", marginBottom: "1rem" }}>Enter Your Mobile Number</div>
        <div className='d-flex justify-content-center align-items-center'>
          <div class="form-floating">
            <input
              type="tel"
              class="form-control wider-input"
              id="mobileNumber"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <label for="mobileNumber"><img className="image" src={user} alt="" />Mobile Number</label>
          </div>
        </div>
        {error && <p className="text-danger">{error}</p>}

        <button type="submit" class="btn submit" onClick={handleGetOTP} disabled={isButtonDisabled}>
          Get OTP
        </button>
      </div>
    </>
  );
}
