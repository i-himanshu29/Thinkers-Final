import React from 'react'
import Footer from './components/Footer'
import { Outlet} from 'react-router-dom'
import { NavbarDemo } from './components/Navbar'



const Layout = () => {
  return (
    <>
    <NavbarDemo/>  
    <Outlet/>  
    <Footer/> 
    </>
  )
}

export default Layout