import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App.jsx'
import HomePage from './Landing_page/Home/HomePage.jsx'
import AboutPage from './Landing_page/About/About.jsx'
import ProductPage from './Landing_page/Product/ProductPage.jsx'
import PricingPage from './Landing_page/Pricing/PricingPage.jsx'
import SupportPage from './Landing_page/Support/SupportPage.jsx'
import Signup from './Landing_page/Signup/Signup.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Navbar />
    <Routes>
     
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Footer/> 
    </BrowserRouter>
 
);
