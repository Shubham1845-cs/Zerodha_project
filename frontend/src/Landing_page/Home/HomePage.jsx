import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import OpenAccount from '../../OpenAccount'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import Education from './Education'
import Awards from './Awards'
import Pricing from './Pricing'

function HomePage() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Stats/>
    <Education/>
    <Awards/>
    <Pricing/>
    <OpenAccount/>
    <Footer/>
    </>
  )
}

export default HomePage