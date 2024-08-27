import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import AboutUs from '../AboutUs/AboutUs'
import Contact_us from '../ContactUs/Contact_us'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        {/* <AboutUs/> */}
        <Contact_us/>
        <Footer/>
    </div>
  )
}

export default Layout