import React from 'react'
import "./footer.scss"

const list = ["About", "Careers", "Events", "Products", "Supports"]

const Footer = () => {
  return (

    <section className="footer__container">
      <article className="leftSide">
        <h3>loopstudios</h3>
        <ul>
          {
            list.map((item, index) => (<li key={index + 1}>{item} <hr></hr></li>))

          }
        </ul>

      </article>
      <article className="rightSide">
        <figure>
          <img src="/images/icon-facebook.svg" alt="icon-facebook" />
          <img src="/images/icon-twitter.svg" alt="icon-twitter" />
          <img src="/images/icon-pinterest.svg" alt="icon-pinterest" />
          <img src="/images/icon-instagram.svg" alt="icon-instagram" />
        </figure>
        <p>@ 2021 Loopstudios. All rights reserved.</p>
      </article>
    </section>

  )
}

export default Footer