import React, { useState } from 'react'
import '../assets/css/signup.css'
import Logo from '../assets/images/hilalLogo.png'
import {Link} from 'react-router-dom'
import Bismillah from '../assets/images/bismillah.png'

const Home = () => {
const[forgot,setForgot]=useState(false)
const[sent,setSent]=useState(false)
const[verified,setVerified]=useState(false)
return (
<>
{
  forgot?
  <>
  <div class="otp-overlay">
  </div>
  <div className="otp-form" >
    <div className="col-lg-6 otp-wrapper animate__animated animate__bounceIn">
      {
        !sent?
        <span>
        <div onClick={()=>setForgot(false)}><i className="bi bi-x text-light px-1 py-1" style={{"font-size":20+"px"}}></i></div>
        <div className="otp-title text-center text-dark mt-4">Find your HilalLink account</div>
        <div className="otp-description forgot-desc text-center mt-2 text-dark"  style={{"fontSize":14+"px"}}>Enter the phone number associated with your account to change your password</div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="custom-input no-icon mt-5 py-3">
              <input type="text" className="custom-input-field" placeholder='Your Phone number or email address here' />
            </div>
            <button id="custom-button" class="forgot-button mb-5" onClick={()=>setSent(true)}>Confirm</button>
          </div>
          <div className="col-lg-2"></div>
        </div>
        </span>
        :
        verified?
        <span>
          <div onClick={()=>setForgot(false)}><i className="bi bi-x text-light px-1 py-1" style={{"font-size":20+"px"}}></i></div>
          <div className="animate__animated animate__fadeInDown mt-5 otp-title text-center text-dark">Create a new password for your account</div>
          <div className="animate__animated animate__fadeInDown otp-description forgot-desc text-center mt-2 text-dark"  style={{"fontSize":14+"px"}}>We have verified your phone number, kindly create a new strong password to protect your account</div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 mt-3">
              <div className="custom-input no-icon py-3 animate__animated animate__fadeInDown ">
                <input type="text" className="custom-input-field" placeholder='New password' />
              </div>
              <div className="custom-input no-icon py-3 animate__animated animate__fadeInDown mt-3">
                <input type="text" className="custom-input-field" placeholder='Verify new password' />
              </div>
              <button id="custom-button" class="animate__animated animate__fadeInDown forgot-button" 
              onClick={()=>{
                setForgot(false)
                setSent(false)
                setVerified(false)
              }}>
                Reset password
              </button>
              <div class="animate__animated animate__fadeInDown code-info text-dark mt-3 text-center py-3 mb-4">Contact us if you don't have access</div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </span>
        :
        <span>
        <div onClick={()=>setForgot(false)}><i className="bi bi-x text-light px-1 py-1" style={{"font-size":20+"px"}}></i></div>
        <div className="animate__animated animate__fadeInDown mt-5 otp-title text-center text-dark">We sent you a code</div>
        <div className="animate__animated animate__fadeInDown otp-description forgot-desc text-center mt-2 text-dark"  style={{"fontSize":14+"px"}}>Check your email to get your confirmation code.If you need a new code go back and re-enter your number</div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div class="animate__animated animate__fadeInDown code-info text-dark mt-3 text-center py-3">The code has been sent on <b>phone number ending in 42</b></div>
            <div className="custom-input no-icon py-3 animate__animated animate__fadeInDown ">
              <input type="text" className="custom-input-field" placeholder='Enter your code' />
            </div>
            <button id="custom-button" class="animate__animated animate__fadeInDown forgot-button" onClick={()=>setVerified(true)}>Verify</button>
            <div class="animate__animated animate__fadeInDown code-info text-dark mt-3 text-center py-3 mb-4">Contact us if you don't have access</div>
          </div>
          <div className="col-lg-2"></div>
        </div>
        </span>
      }
      
    </div>
  </div>
  </>
  :
  ""
}
<div id="signup-wrapper">
  <div className="container">
    <div className="row">
      <div className="col-lg-6" id="logo-container">
        <img src={Logo} className='logoImg' />
        <div className="text-center title">HilalLink</div>
      </div>
      <div className="col-lg-6">
        <div className="col-lg-9">
          <div className="inputs-wrapper">
          <div className='text-center mb-3'>
            <img src={Bismillah} className="bismillah" alt="" />
          </div>
            <div class="custom-input">
              <i class="bi bi-person user-icon"></i>
              <input type="text" class="custom-input-field" placeholder='Username / Phone number' />
            </div>
            <div class="custom-input mt-4">
              <i class="bi bi-shield-lock user-icon"></i>
              <input type="text" class="custom-input-field" placeholder='Password' />
              <i class="bi bi-eye user-icon show-hide"></i>
            </div>
            <div className="options-container">
              <span>
                <input type="checkbox"/>
                <span className="px-2">Remember Me</span>
              </span>
              <span className="forgot-clickable" onClick={()=>setForgot(true)}>
                Forgot Password
              </span>
            </div>
            <button id="custom-button">Login</button>
            <div className="or-section mt-3">
              <span class="lines"></span>
              <span>or</span>
              <span class="lines"></span>
            </div>
            <Link style={{"textDecoration":"none"}} to="/signup/basic-details"><button id="custom-button" class="create">Create Account</button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
)
}

export default Home