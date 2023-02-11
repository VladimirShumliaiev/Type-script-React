import React from 'react';
import style from './NavBar.module.css'
import MyNavLink from "../NavLink/MyNavLink";

const NavBar = () => {
    return (
        <div className={style.item}>
            <MyNavLink/>
            <MyNavLink/>
            <MyNavLink/>
            <MyNavLink/>
            <MyNavLink/>
            <MyNavLink/>
            <MyNavLink/>
            <MyNavLink/>
            <MyNavLink/>
            <MyNavLink/>
            <MyNavLink/>
            <MyNavLink/>
        </div>
    );
};

export default NavBar;