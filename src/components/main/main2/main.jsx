import "./main.scss"
import { banners } from "../../services/listofbanners"
import { useEffect, useState } from "react";

const Main2 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="structure_two">
      <article className="structure_two_header">
        <p className="structure_two_title">Our creations</p>
        <p className={windowWidth > 700 ? "structure_two_button":"hidden"} >See all</p>
      </article>
      <ul className="structure_two_banners">
        {banners.map((banner)=> (<li key={banner.title} className="structure_two_banner">
          <figure className="structure_two_banner_image"> <img src={windowWidth > 700 ? banner.imageDesktop:banner.imageMobile} alt="banner_image" /></figure>
          <div className="structure_two_banner_title"> {banner.title} </div>
           </li>))}
      </ul>
      <article className="structure_two_article_button">
      <span className={!(windowWidth > 700) ? "structure_two_button":"hidden"} >See all</span>
      </article>
    </div>
  )
}

export default Main2