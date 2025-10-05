 import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
 
 const App = () => {
   return (
     <div>
       <Navbar />
       <Hero/>
       <About />
       <Services/>
       <MyWork/>
       <Contacts/>
       <Footer/>
      </div>
   )
 }
 
 export default App
 