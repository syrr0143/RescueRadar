import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Topdesign from './Topdesign';
import user from '../images/user.png';

export default function Language() {
    const navigate = useNavigate();

    const handleProceed = (e) => {
      e.preventDefault();
  
      // Perform your submit logic here
  
      // Redirect to the Language page after successful submit
      navigate('/Homepage'); // Replace '/Language' with the correct path
    };
    return (
        <div>
            <>
                <div style={{ backgroundColor: "#D9FBEE", minHeight: "100vh" }}>
                    <Topdesign />
                    <div className="mobile-number" style={{ textAlign: "center", marginTop: "2rem", marginBottom: "1rem" }}>   Select Language</div>
                    <div className=' d-flex justify-content-center align-items-center'>
                        {/* > */}
                        <select style={{width:"30vw"}} class=" form-select" aria-label="Default select example">
                            <option selected>Select Language</option>
                            <option value="1">Hindi</option>
                            <option value="2">English</option>
                           
                        </select>
                    </div>
                    <button type="submit" class="btn submit" onClick={handleProceed}>Proceed</button>
                    </div>
                    
                </>

        </div>
    )
}
