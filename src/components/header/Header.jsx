import React from 'react'
import Nav from '../nav/Nav'
import Banner from '../banner/Banner'
import "./header.scss"

const Header = ({setMenuMobileActive}) => {
  return (
    <header className='header'>
      <Nav setMenuMobileActive={setMenuMobileActive} />
      <Banner />
    </header>
  )
}

export default Header