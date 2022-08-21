import React from 'react';
import style from './Footer.module.scss';
import '../../App.css';
import {useSelector} from "react-redux";
import instagram from '../../assets/images/social_logo/instagram_logo.png';
import facebook from '../../assets/images/social_logo/facebook_logo.png';
import viber from '../../assets/images/social_logo/viber_logo.png';
import telegram from '../../assets/images/social_logo/telegram_logo.png';

const Footer = () => {
  const language = useSelector(state => state.language);
  const name = useSelector(state => state.owner)
  const ownerName = language === "ua" ? name.nameUA : name.nameEng;

  return (
    <footer className={style.footer}>
      <div className={style.footer__content}>
        <div className={style.description}>
          <div className={style.owner}>
            <h3>{ownerName}</h3>
            <p><a href="tel:+380989474075">098 947 4075</a></p>
          </div>
          <div className={style.social}>
            <a href="https://www.instagram.com/khmara_cakes/"><img src={instagram} alt="instagram"/></a>
            <a href="https://www.facebook.com/yelena.khmara"><img src={facebook} alt="facebook"/></a>
            <a href="viber://chat?number=%2B380989474075"><img src={viber} alt="viber"/></a>
            <a href="tg://resolve?domain=OlenaKhmara"><img src={telegram} alt="telegram"/></a>
          </div>
        </div>
        <div className={style.description__bottom}>
          <div className={style.copy}><p>&copy; {ownerName}, 2022</p></div>
          <div className={style.coder}>Design and coding by
            <a href="https://www.linkedin.com/in/dmytro-khmara/"> Dmytro Khmara</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;