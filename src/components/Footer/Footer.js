import React from 'react';
import style from './Footer.module.scss';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFacebook } from '@fortawesome/free-solid-svg-icons'

// import instagram from '../../assets/images/icons/instagram_icon.svg'
// import facebook from '../../assets/images/icons/facebook_icon.svg'
// import viber from '../../assets/images/icons/viber_icon.svg'
// import instagram from '../../assets/images/icons/instagram_icon.png'
// import facebook from '../../assets/images/icons/facebook_icon.png'
// import viber from '../../assets/images/icons/viber_icon.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__content}>
        <div className={style.description}>
          <div className={style.owner}>
            <h3>Olena Khmara</h3>
            <p><a href="tel:+380989474075">098 947 4075</a></p>
          </div>
          <div className={style.social}>
            <a className={style.social__instagram} href="https://www.instagram.com/khmara_cakes/">
              {/*<i className="fa-brands fa-instagram"></i>*/}
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </a>
            <a className={style.social__facebook} href="https://www.facebook.com/yelena.khmara">
              <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
            </a>
            <a className={style.social__viber} href="viber://chat?number=%2B380989474075">
              {/*<i className="fa-brands fa-viber"></i>*/}
              <FontAwesomeIcon icon="fa-brands fa-viber" />
            </a>
            {/*<a href="https://www.instagram.com/khmara_cakes/">Instagram</a>*/}
            {/*<a href="https://www.facebook.com/yelena.khmara">Facebook</a>*/}
            {/*<a href="viber://chat?number=%2B380989474075">Viber</a>*/}
          </div>
        </div>
        <div className={style.description__bottom}>
          <div className={style.copy}><p>&copy; Khmara Olena, 2022</p></div>
          <div className={style.coder}>Design and coding by
            <a href="https://www.linkedin.com/in/dmytro-khmara/"> Dmytro Khmara</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;