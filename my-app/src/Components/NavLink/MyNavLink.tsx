import React from 'react';
import {NavLink} from "react-router-dom";

interface IsActiveProps {
    isActive: boolean
}

const MyNavLink = () => {
    const isActive = ({isActive}: IsActiveProps) => isActive ? 'item-active-link' : '';
    return (
        <>
            <div>
                <NavLink className={isActive} to={'/'}>Type-Script</NavLink>
            </div>
            <div>
                <NavLink className={isActive} to={'todoItem'}>Type-Script2</NavLink>
            </div>

        </>
    );
};

export default MyNavLink;