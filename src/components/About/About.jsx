import React from 'react'
import './About.css'
import About_Profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
         </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={About_Profile} alt=''/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I'm a frontend developer with a strong eye for design and a focus on creating seamless user experiences using React, TypeScript, and modern CSS frameworks</p>
                    <p>I develop interactive and optimized frontend applications with a strong foundation in JavaScript, React, and performance best practices</p>
                </div>
                <div className='about-skills'>
                     <div className='about-skill'><p>HTML & CSS</p><hr style={{width: "50%"} }/></div>
                     <div className='about-skill'><p>React JS</p><hr style={{width: "70%"} }/></div>
                     <div className='about-skill'><p>Next~ JS</p><hr style={{width: "60%"} }/></div>
                     <div className='about-skill'><p>Javascript</p><hr style={{width: "50%"} }/></div>

                </div>
            </div>
        </div>
        <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className='about-achievement'>
                <h1>5+</h1>
                <p>HAPPY CLIENT</p>
            </div>
        </div>

      
    </div>
  )
}

export default About
