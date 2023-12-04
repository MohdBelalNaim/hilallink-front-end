import React, { useState } from 'react'
import '../../assets/css/signup.css'
import Logo from '../../assets/images/hilalLogo.png'
import {Link} from 'react-router-dom'

const BasicDetails = () => {
const[otp,setOtp] = useState(false)
return (
<>
{
  otp?
  <>
  <div class="otp-overlay">
  </div>
  <div className="otp-form">
    <div className="col-lg-4 otp-wrapper animate__animated animate__bounceIn">
      <div className="otp-title text-center text-dark mt-5">OTP verification</div>
      <div className="otp-description text-center mt-2 text-dark">Sent on 6386164836 <u className="px-2">Edit</u></div>
      <div className="input-fields-otp">
        <input type="text" className="otp-input" maxLength={1}/>
        <input type="text" className="otp-input" maxLength={1}/>
        <input type="text" className="otp-input" maxLength={1}/>
        <input type="text" className="otp-input" maxLength={1}/>
      </div>
      <div className="text-center resend text-dark">Resend in 30 sec</div>
      <Link to="/signup/username" style={{"textDecoration":"none"}}><div className="text-center"><button id="custom-button" class="otp-button mb-5">Confirm</button></div></Link>
    </div>
  </div>
  </>
  :""
}

<div id="signup-wrapper">
  <div className="container">
    <div className="row">
    <div className="col-lg-6" id="logo-container">
        <img src={Logo} className='logoImg basic-logo' />
        <div className="text-center title basic-title">HilalLink</div>
      </div>
      <div className="col-lg-6">
  
        <div className="col-lg-10">
          <div className="inputs-wrapper basics">
          <div className="text-center basics-title">Create a new account</div>
            <div class="custom-input">
              <input type="text" class="custom-input-field no-icons" placeholder='Full Name' />
            </div>
            <div class="custom-input mt-4">
              <input type="text" class="custom-input-field no-icons" placeholder='Phone Number' />
            </div>
            <div class="custom-input mt-4">
              <input type="text" class="custom-input-field no-icons" placeholder='Password' />
            </div>
            <div class="custom-input mt-4">
              <input type="text" class="custom-input-field no-icons" placeholder='Confirm Password' />
            </div>
            <div className="options-container">
              <span className="mt-2">
                <input type="checkbox" />
                <span className="px-2">Remember Me</span>
              </span>
            </div>
            <button id="custom-button" onClick={()=>setOtp(true)}>Signup</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
)
}

export default BasicDetails