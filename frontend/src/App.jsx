import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import HomePage from './Landing_page/Home/HomePage'
import About from './Landing_page/About/About'
import ProductPage from './Landing_page/Product/ProductPage'
import PricingPage from './Landing_page/Pricing/PricingPage'
import SupportPage from './Landing_page/Support/SupportPage'
import Signup from './Landing_page/Signup/Signup'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
