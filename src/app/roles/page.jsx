'use client'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Side from '../Side/Side';
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';

const Roles = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredTwo, setIsHoveredTwo] = useState(false);
    const [isHoveredThree, setIsHoveredThree] = useState(false);



  return (
  <div className='d-flex' >
  <div className="d-none d-sm-none d-md-block">
        <Side/>
      </div>
      <div className='d-flex align-items-center justify-content-center' style={{width:"100vh", height:"100vh"}}>
      <div className=' card shadow-sm p-3 mb-5 bg-white rounded'>
      <div className='card-body bg-white rounded'>
        <h3 className='fw-bold'>Hey! You are here for...</h3>
        <div  className='d-flex  flex-column align-items-center justify-content-center'>
        <div>
          <form>
          <div
            className={`m-2 border border-2 rounded p-3 ${isHovered ? 'bg-light' : ''}`}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            >
                <div className='d-flex align-items-center'>
                    <PersonIcon style={{ fontSize: 40, color:"gray" }} />
                    <div className='mx-4'>
                        <p className='mb-0'>
                            <span style={{ color: 'gray' }}>Applicant</span><br/>I want to get fund for my business
                        </p>                    
                    </div>
                </div>
            </div>
            <div
                className={`m-2 border border-2 rounded p-3 ${isHoveredTwo ? 'bg-light' : ''}`}
                onMouseOver={() => setIsHoveredTwo(true)}
                onMouseOut={() => setIsHoveredTwo(false)}
            >                
            <div className='d-flex align-items-center'>
                    <PersonIcon style={{ fontSize: 40, color:"gray" }} />
                    <div className='mx-4'>
                        <p className='mb-0'>
                            <span style={{ color: 'gray' }}>Broker</span><br/> I connect applicants and Lenders
                        </p>                    
                    </div>
                </div>
            </div>
            <div   
                className={`m-2 border border-2 rounded p-3 ${isHoveredThree ? 'bg-light' : ''}`}
                onMouseOver={() => setIsHoveredThree(true)}
                onMouseOut={() => setIsHoveredThree(false)}
            >
                <div className='d-flex align-items-center mask flex-center rgba-red-strong'>
                    <PersonIcon style={{ fontSize: 40, color:"gray" }} />
                    <div className='mx-4'>
                        <p className='mb-0'>
                            <span style={{ color: 'gray' }}>Lender</span><br/> I help to fund
                        </p>                    
                    </div>
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
            <Link href='/signup'  style={{ textDecoration: 'none', color: 'inherit' }}>
                <button  
                  style={{color:"#fff",backgroundColor:"#2196f3 ",width:"20vw",height:"6vh",borderRadius:4, border:"none"}}
                  className='m-2'
                >
                    Get Started!
                </button>
                </Link>  
              </div>
          </form>
          
        </div>
          <div className='text-dark d-flex  align-items-end justify-content-center '>
                <div className='m-2'>
                  <label  className="form-check-label">
                    Already have account?
                  </label>
                </div>
                <div className='text-primary m-2'>
                  <Link href='/login'>
                    Login
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
export default Roles