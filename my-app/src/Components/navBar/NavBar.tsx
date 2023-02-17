import React from 'react';
import './NavBar.css'
import MyNavLink from "../NavLink/MyNavLink";

const NavBar = () => {
    return (
        <div className={'itemNavBar'}>
            <MyNavLink/>
        </div>
    );
};

export default NavBar;