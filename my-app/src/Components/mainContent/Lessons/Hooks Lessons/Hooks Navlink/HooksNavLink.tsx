import React from 'react';
import {NavLink} from "react-router-dom";
import './HooksNavLink.css'

type IsActiveProps = {
    isActive: boolean
}

const HooksNavLink = () => {

    const isActive = ({isActive}: IsActiveProps) => isActive ? 'HooksNavLinkActive' : ''

    return (
        <div className={'HooksNavLink'}>
            <h3>Basic Hooks:</h3>
            <li>
                <NavLink className={isActive} to={'useState'}> useState </NavLink>
            </li>
            <li>
                <NavLink className={isActive} to={'useEffect'}> useEffect </NavLink>
            </li>
            <li>
                <NavLink className={isActive} to={'useContext'}> useContext </NavLink>
            </li>
            <h3>Additional Hooks:</h3>

        </div>
    );
};

export default HooksNavLink;