import React from 'react'
import ImageOne from '../../../public/Logo.png'
import Image from 'next/image'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import 'bootstrap/dist/css/bootstrap.min.css';

const mailreset = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }} className='p-5 '>
  <div className='m-5 p-5'>
    <div className='d-flex justify-content-center  align-items-center w-50 '>
      <Image
        src={ImageOne}
        width={200}
        height={50}
        alt="Logo"
        className='mb-5'
      />
    </div>
    <div className='d-flex justify-content-center flex-column mt-4'>
      
        <div className='d-flex  flex-column justify-content-center  align-items-center'>
      <h1 className='fw-bold text-left' style={{ fontSize: '30px' }}>You have requested to reset your password</h1>
      <p>Click the button below to choose a new one</p>
        <button
            type='submit'
            style={{ color: '#fff', backgroundColor: '#2196f3', width: '14vw', height: '4vh', borderRadius: 2, border: 'none', marginBottom: 10 }}
        >
            Reset Password
        </button>
        <p>If the button doesn't work , copy the link below into browser</p>
        <div style={{backgroundColor:"lightgray"}} className='d-flex justify-content-center  align-items-center rounded p-4'>
            <p className='m-2' >If the button doesn't ork , copy the link below into browser</p>
            <ContentCopyIcon className='border border-2 p-1 rounded' style={{fontSize:"35px"}}/>
        </div>
        <p className='m-4'>If you didn't mean to reset password, then you can just ignore this <br/> email; your password will not change</p>

      </div>
      </div>
    </div>
  </div>

  )
}

export default mailreset