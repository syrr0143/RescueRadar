import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'


export default function EditProfile() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    
    const handleUpdate = (e) => {
    e.preventDefault();
    // Your form submission logic here

    // Reset input values
    setFullName('');
    setMobileNumber('');
};

    
    
    return (
        <div style={{ backgroundColor: "#EEEEEE", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar fullName={fullName}  mobileNumber={mobileNumber} />
            <div className="container" style={{ marginLeft: "40%", marginTop: "10%" }}>
                <table className="table table-borderless" style={{ width: "60%", background: "#EEEEEE" }}>
                    <tbody>

                        <tr>
                            <td className='profile-options' style={{ background: "#EEEEEE" }} > Full Name</td>
                        </tr>
                        <div class="input-group flex-nowrap">
                            
                            <input type="text" class="form-control" placeholder="Enter Your Full Name" aria-label="Username" aria-describedby="addon-wrapping"  value={fullName}
                                onChange={(e) => setFullName(e.target.value)}/>
                        </div>
                        
                        <tr>
                            <td className='profile-options' style={{ background: "#EEEEEE" }} >Mobile Number</td>
                        </tr>
                        <div class="input-group flex-nowrap">
                            
                            <input type="text" class="form-control" placeholder="Enter Your Mobile Number" aria-label="Username" aria-describedby="addon-wrapping"   value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}/>
                        </div>
                        {/* <tr>
                            <button style={{background:"#12AB69",borderRadius:"10% 20%",border:"none",color:"#FFFFFF",margin:"5% auto",display:"block",padding:"1%",width:"20%",fontSize:"15px"}} onClick={handleUpdate}>UPDATE</button>
                        </tr> */}
                        
                           

                           <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal"style={{
        background: "#12AB69",
        borderRadius: "10% 20%",
        border: "none",
        color: "#FFFFFF",
        margin: "5% auto",
        display: "block",
        padding: "1%",
        width: "20%",
        fontSize: "15px"
    }}
    disabled={!fullName && !mobileNumber}>
                               Update
                           </button>


                           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                               <div class="modal-dialog">
                                   <div class="modal-content" >
                                       <div class="modal-header" style={{ background: "#4bdb9d" }}>
                                           <h1 class="modal-title fs-5" id="exampleModalLabel">Details Updated.</h1>
                                           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                       </div>
                                       <div class="modal-body" >
                                           <p>Your details have been successfully updated.</p>
                                       </div>
                                       <div class="modal-footer">
                                           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleUpdate}>Close</button>

                                       </div>
                                   </div>
                               </div>
                           </div>
                      

                    </tbody>
                </table>
            </div>

        </div>
    )
}

