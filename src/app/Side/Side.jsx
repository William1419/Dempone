import React from 'react'
import ImageOne from '../../../public/Logo.png'
import Image from 'next/image'


const Side = () => {
  return (
    <div 
        style={{ height: '100vh', width:"100vh", backgroundImage:' linear-gradient(to bottom right, #D1C1FF, #FBFFB5)'}} 
        className='p-5'
      >
              <div>
                <Image
                  src={ImageOne}
                  width={200}
                  height={50}
                  alt="Logo"
                  className='mb-5'
                />
            </div>
            <div className='d-flex   justify-content-center flex-column mt-4'>
            <div className='d-fle'>
              <h1 className='fw-bold' style={{fontSize:"50px"}}>Redefine</h1>
              <h1 className='fw-bold' style={{fontSize:"50px"}}>Lending</h1>
              <h1 className='fw-bold' style={{fontSize:"50px"}}>Standards</h1>
            </div>
            <div>
              <div className='my-1'>
                <div 
                  style={{ borderLeft: '5px solid #65fe08',  borderRadius: '0px 40px 1px 0px'}}
                  className='mt-4'
                  >
                  <div className='m-2' style={{fontSize:"20px", marginTop:"10px"}}>
                    <p className='fw-bold m-1'>Unlock the future  of <br/> commerical lending with Unisyn</p>
                  </div>   
                </div>
            </div>
            <div className='d-flex align-items-center mt-4'>
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