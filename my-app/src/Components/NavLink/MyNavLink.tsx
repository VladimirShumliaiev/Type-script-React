import React from 'react';
import {NavLink} from "react-router-dom";


interface IsActiveProps {
    isActive: boolean
}

const MyNavLink = () => {
    const isActive = ({isActive}: IsActiveProps) => isActive ? 'itemNavBar-active-link' : '';
    return (
        <div>
            <div>
                <NavLink className={isActive} to={'/'}>Home</NavLink>
            </div>
            <div>
                <NavLink className={isActive} to={'todo'}>Todos</NavLink>
            </div>
            <div>
                <NavLink className={isActive} to={'homeWork'}>Homework</NavLink>
            </div>
            <div>
                <NavLink className={isActive} to={'lessons'}>Lessons</NavLink>
            </div>
        </div>
    );
};

export default MyNavLink;