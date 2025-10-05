import React from 'react'
import './MyWork.css'
import arrow_icon from "../../assets/arrow-icon.png"
import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.jpeg"
import project3 from "../../assets/project3.jpeg"
import project4 from "../../assets/project4.jpeg"
import project5 from "../../assets/project5.jpeg"
import project6 from "../../assets/project6.jpeg"

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className='mywork-title'>
        <h1>My latest Work</h1>   
        </div>
        <div className='mywork-container'>
            <img src={project1} alt=''/>
            <img src={project2} alt=''/>
            <img src={project3} alt=''/>
            <img src={project4} alt=''/>
            <img src={project5} alt=''/>
            <img src={project6} alt=''/>

        </div>
        <div className='mywork-showmore'>
            <p>Show More</p>
            <img src={arrow_icon} alt=''/>
        </div>
      
    </div>
  )
}

export default MyWork
