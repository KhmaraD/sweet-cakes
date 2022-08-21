import React, {useState} from 'react';
import style from './Header.module.scss';
import Navbar from './Navbar/Navbar';
// import logo from '../../assets/images/cake.png';
import logo from '../../assets/images/logo_cupcake.png';

import logoName from '../../assets/images/logo_name.png';

const Header = ({links, language, setLang}) => {

    return (
        <header>
            <div className={style.logoWrapper}>
                <img className={style.logo} src={logo} alt="logo"/>
                {/*<img className={style.logoName} src={logoName} alt="logo Name"/>*/}
            </div>
            <Navbar
              links={links}
              language={language}
              setLang={setLang}
            />
        </header>
    );
};

export default Header;
