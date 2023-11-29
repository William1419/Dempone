'use client'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Side from '../Side/Side';
import Link from 'next/link';
import Select from 'react-select';
import axios from 'axios';
import { ReactCountryFlag } from 'react-country-flag';


const Signup = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [countryCodes, setCountryCodes] = useState([]);

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        const codes = response.data.map(country => ({
          value: `+${country.callingCodes[0]}`,
          label: (
            <div>
               <ReactCountryFlag countryCode={country.alpha2Code} svg />
               {`+${country.callingCodes[0]}`}
            </div>
          ),
        }));
        setCountryCodes(codes);
      } catch (error) {
        console.error('Error fetching country codes:', error);
      }
    };

    fetchCountryCodes();
  }, []);

  return (
  <div className='d-flex' >
  <div className="d-none d-sm-none d-md-block">
        <Side/>
      </div>
      <div className='d-flex align-items-center justify-content-center' style={{width:"100vh", height:"100vh"}}>
      <div className=' card shadow-sm p-3 mb-5 bg-white rounded'>
      <div className='card-body bg-white rounded'>
        <h3 className='fw-bold'>SignUp</h3>
        <div  className='d-flex  flex-column align-items-center justify-content-center'>
        <div>
          <form>
          <div className='d-flex'>
            <div className='m-2'>
                <input
                  type="text"
                  className="form-control py-3"
                  id="firstname"
                  placeholder="First name"
                />
              </div>
              <div className='m-2'>
                <input
                  type="text"
                  className="form-control py-3"
                  id="lastname"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className='m-2'>
              <input
                type="text"
                className="form-control py-3"
                id="company"
                placeholder="Company Name"
              />
            </div>
          <div className='m-2'>
              <input
                type="email"
                className="form-control py-3"
                id="email"
                placeholder="Email address"
              />
            </div>
            <div className='d-flex align-items-center justify-content-between'>
            <div className='m-2'>
              <Select
                options={countryCodes}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    width: '150px', 
                  }),
                }}
              />
              </div>

              <div className='m-2'>
                <input
                  type="number"
                  className="form-control py-3"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className='m-2'>
              <input
                type="password"
                className="form-control py-3"
                id="password"
                placeholder="Create password"
                
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
                I agree to the terms & privacy policy
              </label>
              </div>
            </div>
            
            <div style={{display:"flex",justifyContent:"center"}}>
                <button  
                  type='submit' 
                  style={{color:"#fff",backgroundColor:"#2196f3 ",width:"18vw",height:"4vh",borderRadius:2, border:"none",marginBottom:10}}
                >
                  Register
                </button>
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
export default Signup