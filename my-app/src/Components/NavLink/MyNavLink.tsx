import React from 'react';
import {NavLink} from "react-router-dom";
import style from './MyNavLink.module.css'

interface IsActiveProps {
    isActive: boolean
}

const MyNavLink = () => {
    const isActive = ({isActive}: IsActiveProps) => isActive ? 'item-active-link' : '';
    return (
        <div className={style.item}>
            <div>
                <NavLink className={isActive} to={'/'}>Type-Script page 1</NavLink>
            </div>
            <div>
                <NavLink className={isActive} to={'todoItem'}>Type-Script page 2 </NavLink>
            </div>
        </div>
    );
};

export default MyNavLink;