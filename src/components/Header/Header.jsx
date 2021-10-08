import React from 'react';
import style from './Header.module.css';
import Navbar from '.././Header/Navbar/Navbar';
import logo from '../../assets/images/cake.png';
import logoName from '../../assets/images/logo_name.png';


const Header = ({links, language}) => {
    return (
        <header>
            <div className={style.logoWrapper}>
                <img className={style.logo} src={logo} alt="logo"/>
                <img className={style.logoName} src={logoName} alt="logo Name"/>
            </div>
            <Navbar links={links} language={language}/>
        </header>
    );
};

export default Header;