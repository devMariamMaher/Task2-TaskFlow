import React from 'react'
import Header from './components/Header'
import Features from './components/Features'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Header/>
      <div data-aos="fade-up"><Features/></div>
      <div data-aos="fade-up"><Reviews/></div>
      <div data-aos="fade-up"><Pricing/></div>
      <Footer/>
    </div>
  )
}

export default App