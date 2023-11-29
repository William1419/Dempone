import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Side from '../Side/Side';
import Link from 'next/link';

const Forgotpassword = () => {
  return (
  <div className='d-flex' >
        <div className="d-none d-sm-none d-md-block">
        <Side/>
      </div>
      <div className='d-flex align-items-center justify-content-center' style={{width:"100vh", height:"100vh"}}>
      <div className=' card shadow-sm p-3 mb-5 bg-white rounded'>
      <div className='card-body bg-white rounded d-flex flex-column'>
        <h3 className='fw-bold'>Forgot Password</h3>
        <p>Don't worry it happens. Please enter the email<br/> associated with your account</p>
          <form>
          <div className='m-2'>
              <input
                type="email"
                className="form-control w-100"
                id="email"
                placeholder="Email address"
              />
            </div>    
           <div style={{display:"flex",justifyContent:"center"}}>
                <button  
                  type='submit' 
                  style={{color:"#fff",backgroundColor:"#2196f3 ",width:"17vw",height:"4vh",borderRadius:2, border:"none",marginBottom:10}}
                >
                  Submit
                </button>
              </div>
          </form>
          
        </div>
          </div>
      </div>
    </div>
);
}; 
export default Forgotpassword