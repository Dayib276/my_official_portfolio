import React from 'react'
import'./Contacts.css'
import Call_logo from '../../assets/Call_logo.png'
import location_logo from '../../assets/location_logo.png'
import mail_logo from '../../assets/mail_logo.png'

const Contacts = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b3f47873-6379-4eac-87a2-fec544df2a79");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
    alert(res.message)
    }
  };
  return (
    <div id='contacts' className='contacts'>
        <div className='contacts-title'>
            <h1>Get in touch</h1>
        </div>
        <div className='contacts-section'>
                  <div className='contacts-left'>
                   <h1>Let's talk</h1>
                   <p>I'm currently available to take new projects , so feel free to send me a messageabout anything that you want me to work on. You can contact anytime you want </p>
                
         <div className= 'contacts-details'>
                <div className='contacts-detail'>
                    <img src={mail_logo} alt=''/> <p>dayibidris@gmail.com</p>
                </div>
                <div className='contacts-detail'>
                   <img src={Call_logo} alt=''/> <p>+254 724646902</p> 
                </div>
                <div className='contacts-detail'>
                    <img src={location_logo} alt=''/> <p>Nairobi, Kenya</p>   
                </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contacts-right'>
               <label htmlFor=''>Your Name</label>
               <input type='text' placeholder='Enter Your Name...' name='name'/>
               <label htmlFor=''>Your Email</label>
               <input type='email' placeholder='Enter Your Email...' name='email'/>
               <label htmlFor=''>Enter your Message</label>
               <textarea name='message' rows='8' placeholder='Enter your message...'></textarea>
               <button type='submit' className='contacts-submit'>Submit Now</button>
            </form>
        </div>  
    </div>
  )
}

export default Contacts
