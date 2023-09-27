import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topdesign from './Topdesign';
import user from '../images/user.png';

export default function OTP() {
  const navigate = useNavigate();

    const handleProceed = (e) => {
      e.preventDefault();
  
      // Perform your submit logic here
  
      // Redirect to the Language page after successful submit
      navigate('/Language'); // Replace '/Language' with the correct path
    };
  return (
    <div>
      <>
            <div style={{ backgroundColor: "#D9FBEE", minHeight: "100vh" }}>
                <Topdesign />
                <div className="mobile-number" style={{ textAlign: "center", marginTop: "2rem",marginBottom:"1rem" }}>   Enter the OTP</div>
                <div className=' d-flex justify-content-center align-items-center'>
                    {/* > */}
                    <div class="form-floating">
                        <input type="password" class="form-control wider-input" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword"> <img className="image" src={user} alt="" />OTP</label>
                    </div>
                </div>




                <button type="submit" class="btn submit"onClick={handleProceed}>PROCEED</button>

            </div>




        </>
    </div>
  )
}
