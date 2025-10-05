import React from 'react'
import './Hero.css'
import Profile from '../../assets/profile1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero'>
        <img className='profile-image' src={Profile} alt=''/>
        <h1><span>I'm Dayib Idris,</span> a Frontend Developer based in Kenya</h1>
        <p>I am a frontend Developer from Nairobi, Kenya with 2 years of experienced</p>
        <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contacts'>Connect with me</AnchorLink></div> 
        <div className='hero-resume'>My resume</div>
        </div>
      </div>
  )
}

export default Hero
