// import React from 'react';
import logobg from '../images/logobg.png';
import user from '../images/user.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform your submit logic here
  
      // Redirect to the Language page after successful submit
      navigate('/Homepage'); // Replace '/Language' with the correct path
    };
    return (
        <div style={{ backgroundColor: "#D9FBEE", minHeight: "100vh" }}>
        <div className='containerss'>
            <div className='front-design'>
                <h3 className="text-center heading"> Rescue <span className='radar'>Radar</span></h3>
                <div className='logo-container'>
                    <img className='logobg' src={logobg} alt="" />
                </div>
            </div>

           
        </div>
        <div className='forms'>
                <label className="password" for="exampleInputEmail1" class="form-label">Enter Email</label>
                <div class="form-floating mb-3">

                    <input type="email" class="form-control wider-input" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput"><img className="image" src={user} alt="" />Email address</label>
                </div>
                <label className="password" for="exampleInputPassword1" class="form-label">Enter Password</label>
                <div class="form-floating">
                    <input type="password" class="form-control wider-input" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword"> <img className="image" src={user} alt="" />Password</label>
                </div>
                
            </div>
            <button type="submit" class="btn submit" onClick={handleSubmit}>LOGIN</button>
                <h5 className='text-center forgot'>Forgot password?</h5>

            </div>
    );
};

export default AdminLogin;
