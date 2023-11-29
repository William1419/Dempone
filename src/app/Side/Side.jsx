import React from 'react'
import ImageOne from '../../../public/Logo.png'
import Image from 'next/image'


const Side = () => {
  return (
    <div 
      style={{ height: '100vh', width:"100vh",backgroundImage:' linear-gradient(to bottom right, #D1C1FF, #FBFFB5)'}} >
        <div className='d-flex align-items-center justify-content-center ' >
            <Image
               src={ImageOne}
               width={200}
               height={50}
               alt="Logo"
             />
            </div>
            <div className='d-flex h-75 justify-content-center flex-column align-items-start p-2'>
            <div>
              <h1 className='fw-bold' style={{fontSize:"50px"}}>Redefine</h1>
              <h1 className='fw-bold' style={{fontSize:"50px"}}>Lending</h1>
              <h1 className='fw-bold' style={{fontSize:"50px"}}>Standards</h1>
            </div>
            <div className='d-flex flex-column '>
              <div className='my-1'>
                <div 
                  style={{ borderLeft: '5px solid #65fe08',  borderRadius: '0px 40px 1px 0px'}}
                  >
                  <div className style={{fontSize:"20px", marginTop:"10px"}}>
                    <p className='fw-bold'>Unlock the future  of <br/> commerical lending with Unisyn</p>
                  </div>   
                </div>
            </div>
            <div className='d-flex align-items-center'>
            <p className='w-50'>Embark on a journey where <strong>data-driven insights </strong>are seamlessly combined 
              with <strong>top-tier security</strong>, ensuring that every transaction remains well-informed and safeguarded.
            </p>
            </div>
            </div>
            </div>
      </div>
  )
}

export default Side