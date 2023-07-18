import React, { useEffect, useState } from 'react'
import menuIcon from "../../assets/images/icon-hamburger.svg"
import closeIcon from "../../assets/images/icon-close.svg"
import logo from "../../assets/images/logo.svg"
import "./nav.scss"

const Nav = ({ setMenuMobileActive }) => {
    const [showDesktopMenu, setDesktopMenu] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const menu = ["About", "Careers", "Events", "Products", "Support"]

    useEffect(() => {
        handleDesktopMenu()

        window.addEventListener('resize', handleDesktopMenu);

        return () => {
            window.removeEventListener('resize', handleDesktopMenu);
        };

    }, [])

    const handleDesktopMenu = () => {
        const windowWidth = window.innerWidth;

        if (windowWidth > 600) {
            setDesktopMenu(true)
        } else {
            setDesktopMenu(false)
        }
    }

    const handleMobileMenu = (boolean) => {
        if (boolean) {
            setShowMobileMenu(true)
            setMenuMobileActive(true)
        } else {
            setShowMobileMenu(false)
            setMenuMobileActive(false)
        }
    }

    return (
        <article className='nav'>
            <figure className='nav__logo-container' >
                <img src={logo} alt="" className='nav__logo' />
            </figure>
            <nav className='nav__container'>
                <button
                    onClick={() => { handleMobileMenu(true) }}
                    className={showDesktopMenu ? "nav__open-mobile-menu hidden" : "nav__open-mobile-menu"}>
                    <img src={menuIcon} alt="" />
                </button>
                <ul className={showDesktopMenu ? "nav__desktop-menu" : "nav__desktop-menu hidden"}>
                    {
                        menu.map((item, index) => (
                            <li key={index + 1} className="nav__desktop-menu__item" >
                                <p>{item}</p>
                                <hr className="nav__desktop-menu__item__line"/>
                            </li>
                        ))
                    }
                </ul>
                <section className={showMobileMenu ? "nav__mobile-menu" : "nav__mobile-menu hidden"}>
                    <div className="nav__mobile-menu__header-container">
                        <img src={logo} alt="" className='nav__logo' />
                        <button onClick={() => { handleMobileMenu(false) }} className='nav__close-mobile-menu'>
                            <img src={closeIcon} alt="" />
                        </button>
                    </div>
                    <div className="nav__mobile-menu__items">
                        {
                            menu.map((item, index) => (<div key={index + 1} className="nav__mobile-menu__item">{item.toUpperCase()}</div>))
                        }
                    </div>
                </section>
            </nav>
        </article>
    )
}

export default Nav