import React from 'react'
import Navbar from "../Header/Navbar";
import Top from "../Header/top";
import Slides from './Slides';
import Cards from './Cards';
import Cards1 from './Cards1';
import Footer from '../Header/footer';

const Home = () => {
  return (
    <div>
    <Top />
    
    <Navbar />
    <Slides />
    <Cards />
    <Cards1 />
    <Footer />
      
    </div>
  )
}

export default Home
