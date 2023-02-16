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
                <NavLink className={isActive} to={'/'}>Todos</NavLink>
            </div>
            <div>
                <NavLink className={isActive} to={'homeWork'}>HomeWork</NavLink>
            </div>
            <div>
                <NavLink className={isActive} to={'lessons'}>Lessons</NavLink>
            </div>
        </div>
    );
};

export default MyNavLink;