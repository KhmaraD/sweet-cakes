import React from 'react';
import style from './Footer.module.css';
import '../../App.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__content}>
                <div className={style.description}>
                    <div className={style.description__left}>
                        <h2>Olena Khmara</h2>
                        <p><a href="tel:+380989474075">098 947 4075</a></p>
                    </div>
                    <div className={style.description__right}>
                        <p><a href="https://www.instagram.com/khmara_cakes/">Instagram</a></p>
                        <p><a href="https://www.facebook.com/yelena.khmara">Facebook</a></p>
                        <p><a href="viber://chat?number=%2B380989474075">Viber</a></p>
                    </div>
                </div>
                <div className={style.description__bottom}>
                    <div className={style.copy}><p>&copy; Khmara Olena, 2021</p></div>
                    <div className={style.coder}>Design and coding <br/>
                        by <a href="https://www.linkedin.com/in/dmytro-khmara/">Dmytro Khmara</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;