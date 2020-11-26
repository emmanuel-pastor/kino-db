import React from 'react';
import style from './NavBar.module.css';
import logo from '../../logo.svg';


function NavBar() {
    return (
        <div className={style.NavBar}>
            <a className={style.LogoTitleLink} href={'.'}>
                <div className={style.LogoTitleDiv}>
                    <img className={style.Logo} src={logo} alt={"Website logo"}/>
                    <p className={style.NavTitle}>Kino Db</p>
                </div>
            </a>
        </div>
    );
}

export default NavBar;