import React from 'react'
import Style from  './home.module.css'
import Navbar from '../component/shared/Navbar'

const Home = () => {
  return (
    <div className={Style.container}>

      <div className={Style.hero1}>
        <div className={Style.hero}>
        <div><h1>Elevate. Engage. <br /> Secure</h1>
        <p>Empowering your digital presence with innovative social media solutions, Your trusted partner in digital transformation.</p></div>
        <div><button>Explore Our Services</button></div>

      </div>
      </div>

    </div>
  )
}

export default Home
