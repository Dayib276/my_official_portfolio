import React from 'react'
import './Services.css'
import theme_pattern from "../../assets/themepattern.png"
import arrow_icon from "../../assets/arrow-icon.png"


const services = () => {
  return (
    <div id='services' className='services'>
        <div className='services-title'>
            <h1>My services</h1>
            <img src={theme_pattern} alt=''/>
        </div>
      <div className='services-container'>
        <div className='services-format'> 
            <h3>01</h3>
             <h2>Web Development</h2>
             <p>Web development is the process of building, programming...</p>
        </div>
        <div className='services-format'> 
            <h3>02</h3>
             <h2>Graphic Design</h2>
<p>is the art and practice of creating visual content to communicate ideas, messages, or brand identity.</p>   
          <div className='services-readmore'>
            <p>Read More</p>
            <img src={arrow_icon} alt=''/>
        </div>
        </div>
        <div className='services-format'> 
            <h3>03</h3>
             <h2>UI/UX Design</h2>
             <p>Ensures websites are user-friendly, aesthetically appealing, and responsive....</p>
             <div className='services-readmore'>
            <p>Read More</p>
            <img src={arrow_icon} alt=''/>
        </div>
        </div>
        <div className='services-format'> 
            <h3>04</h3>
             <h2>CMS & E-commerce Integration</h2>
 <p>Useful for content-heavy or online store websites.</p>            
  <div className='services-readmore'>
            <p>Read More</p>
            <img src={arrow_icon} alt=''/>
        </div>
        </div>
        <div className='services-format'> 
            <h3>05</h3>
             <h2>Data science</h2>
         <p>is the field that combines programming, statistics, and domain knowledge to extract meaningful insights and predictions from data.</p> 
            <div className='services-readmore'>
            <p>Read More</p>
            <img src={arrow_icon} alt=''/>
        </div>
        </div>
        <div className='services-format'> 
            <h3>06</h3>
             <h2>Data Analysis</h2>
<p>is the process of collecting, cleaning, interpreting, and visualizing data to uncover useful insights, support decision-making, and improve business performance.</p>             <div className='services-readmore'>
            <p>Read More</p>
            <img src={arrow_icon} alt=''/>
        </div>
             
        </div>
      </div>
    </div>
  )
}

export default services
