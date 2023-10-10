import React from 'react'
import './index.css'
import ToBar from './components/ToBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Activities from './components/Activities'
import Booking from './components/Booking'
import Gallary from './components/Gallary'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
        <ToBar/>
        <Navbar/>
        <Hero/>
        <Activities/>
        <Booking/>
        <Gallary/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App