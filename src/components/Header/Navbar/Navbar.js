import React from 'react';
import style from './Navbar.module.scss'
import {NavLink} from "react-router-dom";

const Navbar = ({links, language, setLang}) => {
    //
    // const links = [
    //     {link: "/main", linkNameEng: "Main", linkNameUa: "Головна"},
    //     {link: "/price", linkNameEng: "Price", linkNameUa: "Ціни"},
    //     {link: "/contacts", linkNameEng: "Contacts", linkNameUa: "Контакти"},
    //     {link: "/order", linkNameEng: "Order", linkNameUa: "Як замовити"},
    // ]

    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                {links.map(item =>
                    <li className={style.nav__item} key={item.link}>
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
                onChange={(e) => setLang(e.target.value)}>
                {/*add Local Storage*/}
                <option value="eng">ENG</option>
                <option value="ua">UA</option>
            </select>
        </nav>
    );
};

export default Navbar;