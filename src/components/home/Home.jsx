
import React, { useState } from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'
import "./home.scss"

const Home = () => {
  const [menuMobileActive, setMenuMobileActive] = useState(false)
  return (
    <div className={menuMobileActive ? "active" : ""}>
        <Header setMenuMobileActive={setMenuMobileActive}/>
        <Main />
        <Footer />
    </div>
  )
}

export default Home