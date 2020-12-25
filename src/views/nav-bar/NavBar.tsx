import React from 'react';
import style from './NavBar.module.css';
import logo from '../../img/logo.svg';
import {NavigationPath} from "../../util/NavigationUtil";
import {useLocation} from "react-router";
import {NavLink} from "react-router-dom";
import Searchbar from "./Searchbar/Searchbar";

function NavBar() {

    const {pathname} = useLocation();

    return (
        <div className={style.NavBar}>
            <NavLink to={NavigationPath.ROOT} activeClassName={style.LogoTitleDiv}>
                <div className={style.LogoTitleDiv}>
                    <img className={style.Logo} src={logo} alt={"Website logo"}/>
                    <p className={style.NavTitle}>Kino Db</p>
                </div>
            </NavLink>

            <ul className={style.NavigationLinks}>
                <NavLink to={NavigationPath.UPCOMING_MOVIES} activeClassName={style.active}
                         isActive={() => [NavigationPath.ROOT.toString(), NavigationPath.UPCOMING_MOVIES.toString()].includes(pathname)}>
                    <li>{"Upcoming Movies"}</li>
                </NavLink>
                <NavLink to={NavigationPath.POPULAR_MOVIES} activeClassName={style.active}>
                    <li>{"Popular Movies"}</li>
                </NavLink>
                <Searchbar/>
            </ul>
        </div>
    );
}

export default NavBar;