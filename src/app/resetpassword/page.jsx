'use client'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Side from '../Side/Side';
import Link from 'next/link';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Resetpassword = () => {
    const [visible, setVisible] = useState(true);
    const [visibleTwo, setVisibleTwo] = useState(true);

  return (
  <div className='d-flex' >
        <div className="d-none d-sm-none d-md-block">
        <Side/>
      </div>
      <div className='d-flex align-items-center justify-content-center' style={{width:"100vh", height:"100vh"}}>
      <div className=' card shadow-sm p-3 mb-5 bg-white rounded'>
      <div className='card-body bg-white rounded d-flex flex-column'>
        <h3 className='fw-bold'>Reset Password</h3>
        <p>Please type something you'll remember</p>
          <form>
          <div className="input-group m-2">
            <input
                type={visible ? 'password' : 'text'}
                className="form-control"
                id="password"
                placeholder="New password"
            />
            <div 
                className="input-group-append cursor-pointer"
                onClick={() => setVisible(!visible)} 
            >
                <span className="input-group-text">
                {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </span>
            </div>
            </div>
            <div className="input-group m-2">
            <input
                type={visible ? 'password' : 'text'}
                className="form-control"
                id="password"
                placeholder="Confirm password"
            />
            <div 
                className="input-group-append cursor-pointer"
                onClick={() => setVisibleTwo(!visibleTwo)} 
            >
                <span className="input-group-text">
                {visibleTwo ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </span>
            </div>
            </div>
           <div style={{display:"flex",justifyContent:"center"}}>
                <button  
                  type='submit' 
                  style={{color:"#fff",backgroundColor:"#2196f3 ",width:"14.5vw",height:"4vh",borderRadius:2, border:"none",marginBottom:10}}
                  className='mt-2'
                >
                  Reset Password
                </button>
              </div>
          </form>
          
        </div>
          </div>
      </div>
    </div>
);
}; 
export default Resetpassword