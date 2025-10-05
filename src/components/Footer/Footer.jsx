import React from 'react'
import "./Footer.css"
import Footer_logo from "../../assets/logo.png"
import User_icon from "../../assets/user_icon1.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
            <img src={Footer_logo} alt=''/>
            <p>I'm Frontend and backend developer from Kenya with 2+ years of experience</p>
        </div>
        <div className='footer-top-right'>
         <div className='footer-email-input'>
            <img src={User_icon} alt=''/>
            <input type='email' placeholder='Enter your email...'/>     
        </div>
            <div className='footer-subscribe'>Subscribe</div>
  
       </div>

    </div>
    <hr/>
    <div className='footer-bottom'>
        <p className='footer-bottom-left'>&copy; 2025 Dayib Idris Jele. All rights reserved.</p>
        <div className='footer-bottom-right'>
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
     </div>
  </div>
  )
}

export default Footer
