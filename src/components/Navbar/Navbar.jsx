import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../../assets/menu-open.png"
import menu_close from "../../assets/menuClose.png"


const Navbar = () => {
  const [menu , setMenu] = useState("home");

   return (
    <div id='navbar' className='navbar'>
     <img src={logo} alt=''/>
     <img src={menu_open} alt=''className='nav-mob-open'/> 
     <ul className='nav-menu'>
      <img src={menu_close} alt='' className='nav-mob-close'/>
        <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=> setMenu("home")}>HOME</p></AnchorLink> {menu==="home"?<hr className=''/>:<></>} </li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=> setMenu("about")}>ABOUT</p></AnchorLink>{menu==="about" ? <hr className=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=> setMenu("services")}>SERVICES</p></AnchorLink> {menu==="services" ? <hr className=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=> setMenu("port-folio")}>PORT-FOLIO</p></AnchorLink>{menu==="port-folio" ? <hr className=''/>:<></>} </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#contacts'><p onClick={()=> setMenu("contact")}>CONTACT</p></AnchorLink>{menu==="contact" ? <hr className=''/>:<></>} </li>
     </ul>
    <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contacts'>Connect with me</AnchorLink></div> 
     
    </div>
  )
}

export default Navbar
