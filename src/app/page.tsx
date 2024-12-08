import React from 'react'

import Navbar from './Components/Navbar'
import Hero from "../app/Components/Hero"
import Arrival from './Components/Arrival'

import Seller from "./Seller/Seller";
import DressStyle from "./Category/Category";
import Person from "./Person/Person";
import Footer from "../app/Components/Footer"

const Home = () => {
  return (
    <div className="max-w-full h-full flex-grow justify-start items-center">
      <Navbar/>
      <Hero/> 
       <Arrival/>
  
    <Seller/>
    <DressStyle/>
    <Person/>
    <Footer/>
    </div>
  )
}

export default Home
