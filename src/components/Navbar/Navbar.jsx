import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"
import { useRef } from 'react'


const Navbar = () => {
 const [menu , setMenu] = useState("home");
 const menuRef = useRef();
const openMenu = () => {
  menuRef.current.style.right="0";
}
const closeMenu = () => {
  menuRef.current.style.right="-350px";
}
   return (
    <div id='Navbar' className='navbar'>
     <img src={logo} alt=''/>
     <img src={menu_open} onClick={openMenu} alt=''className='nav-mob-open'/> 
    <ul ref={menuRef} className='nav-menu'>
    <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close'/>
        <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=> setMenu("home")}>HOME</p></AnchorLink> {menu==="home" ? <hr className=''/>:<></>} </li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=> setMenu("about")}>ABOUT</p></AnchorLink>{menu==="about" ? <hr className=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=> setMenu("services")}>SERVICES</p></AnchorLink> {menu==="services" ? <hr className=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=> setMenu("port-folio")}>PORT-FOLIO</p></AnchorLink>{menu==="port-folio" ? <hr className=''/>:<></>} </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#contacts'><p onClick={()=> setMenu("contact")}>CONTACT</p></AnchorLink>{menu==="contact" ? <hr className=''/>:<></>} </li>
     </ul>
    <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contacts'>Connect or code with me</AnchorLink></div> 
      
    </div>
  )
}

export default Navbar
