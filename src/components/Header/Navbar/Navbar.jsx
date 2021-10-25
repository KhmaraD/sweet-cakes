import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = ({links, language, setLang}) => {



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
            <select name="selectLang" id="lang" value={language} onChange={(e) => setLang(e.target.value)}>
                <option value="eng">ENG</option>
                <option value="ua">UA</option>
            </select>
        </nav>
    );
};

export default Navbar;