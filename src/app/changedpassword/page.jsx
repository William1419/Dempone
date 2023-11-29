import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Side from '../Side/Side';
import congrats from '../../../public/Congrats.jpg'
import Image from 'next/image';
import Link from 'next/link';

const changedpassword = () => {
  return (
  <div className='d-flex' >
        <div className="d-none d-sm-none d-md-block">
        <Side/>
      </div>
      <div className='d-flex align-items-center justify-content-center' style={{width:"100vh", height:"100vh"}}>
      <div className=' card shadow-sm p-3 mb-5 bg-white rounded'>
      <div className='card-body bg-white rounded d-flex flex-column'>
        <div className='d-flex align-items-center justify-content-center '>
         <Image
            src={congrats}
            width={100}
            height={100}
            alt="Logo"
            className='mb-5 d-flex '
        />
        </div>
        <div className='d-flex  flex-column align-items-center justify-content-center'>
            <h3 className='fw-bold'>You are all set!</h3>
            <p className='text-center'>Your password has been changed <br/> successfully</p>
        </div>
           <div style={{display:"flex",justifyContent:"center"}}>
                <button  
                  style={{color:"#fff",backgroundColor:"#2196f3 ",width:"17vw",height:"4vh",borderRadius:2, border:"none",marginBottom:10}}
                >
                  <Link href='/login'  style={{ textDecoration: 'none', color: 'inherit' }}>
                    Login Now
                  </Link>  
                </button>
              </div>
          
          
        </div>
          </div>
      </div>
    </div>
);
}; 
export default changedpassword