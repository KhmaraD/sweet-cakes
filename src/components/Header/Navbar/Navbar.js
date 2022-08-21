import React, {useState} from 'react';
import style from './Navbar.module.scss'
import {NavLink} from "react-router-dom";

const Navbar = ({links, language, setLang}) => {
  const [isActive, setIsActive] = useState(false);

    // const links = [
    //     {link: "/main", linkNameEng: "Main", linkNameUa: "Головна"},
    //     {link: "/price", linkNameEng: "Price", linkNameUa: "Ціни"},
    //     {link: "/contacts", linkNameEng: "Contacts", linkNameUa: "Контакти"},
    //     {link: "/order", linkNameEng: "Order", linkNameUa: "Як замовити"},
    // ]

    return (
      <div className={style.nav__wrapper}>
        <div
          className={isActive ? `${style.nav__icon} ${style.active_icon}` : style.nav__icon}
          onClick={() => setIsActive(!isActive)}
        >
            <span></span>
        </div>
        <nav className={isActive ? `${style.nav} ${style.active}` : style.nav}>
            <ul className={style.list}>
                {links.map(item =>
                    <li className={style.nav__item} key={item.link} onClick={() => setIsActive(false)}>
                        <NavLink to={item.link} activeClassName={style.active}>
                            {language === "ua"
                                ? item.linkNameUa
                                : item.linkNameEng
                            }
                        </NavLink>
                    </li>
                )}
            </ul>
            <select
                name="selectLang"
                id="lang"
                value={language}
                onChange={(e) => {
                  setLang(e.target.value);
                  setIsActive(!isActive);
                }}>
                {/*add Local Storage*/}
                <option value="eng">ENG</option>
                <option value="ua">UA</option>
            </select>
        </nav>
      </div>
    );
};

export default Navbar;