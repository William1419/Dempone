import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Side from '../Side/Side';
import Link from 'next/link';

const Login = () => {
  return (
  <div className='d-flex' >
<div className="d-none d-sm-none d-md-block">
        <Side/>
      </div>
      <div className='d-flex align-items-center justify-content-center' style={{width:"100vh", height:"100vh"}}>
      <div className=' card shadow-sm p-3 mb-5 bg-white rounded'>
      <div className='card-body bg-white rounded'>
        <h3 className='fw-bold'>Welcome Back!</h3>
        <div  className='d-flex  flex-column align-items-center justify-content-center'>
        <div>
          <form>
          <div className='m-2'>
              <input
                type="email"
                className="form-control py-3"
                id="email"
                placeholder="Email address"
              />
            </div>
            <div className='m-2'>
              <input
                type="password"
                className="form-control py-3"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className='text-dark d-flex  align-items-center justify-content-between '>
            <div className='m-2'>
              <input
                type="radio"
                id="remember"
                name="remember"
                className="form-check-input mx-1 text-success"
                style={{ borderColor:'black' }}
              />
              <label  className="form-check-label">
                Remember me
              </label>
              </div>
              <div className='text-primary'>
                <Link href='/forgotpassword'>
                  Forgot Password ?
                  </Link>
              </div>
            </div>
            
            <div style={{display:"flex",justifyContent:"center"}}>
                <button  
                  type='submit' 
                  style={{color:"#fff",backgroundColor:"#2196f3 ",width:"18vw",height:"4vh",borderRadius:2, border:"none",marginBottom:10}}
                >
                  Login
                </button>
              </div>
          </form>
          
        </div>
          <div className='text-dark d-flex  align-items-end justify-content-center '>
                <div className='m-2'>
                  <label  className="form-check-label">
                    Don't have account ?
                  </label>
                </div>
                <div className='text-primary m-2'>
                  <Link href='/roles'>
                    Sign Up
                  </Link>                
                </div>
            </div>
          </div>
      </div>
    </div>
    </div>
    </div>
);
}; 
export default Login