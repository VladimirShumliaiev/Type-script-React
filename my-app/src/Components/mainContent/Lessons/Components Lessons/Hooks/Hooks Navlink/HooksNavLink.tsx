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
            <div>
                <NavLink className={isActive} to={'useState'}> useState </NavLink>
            </div>
            <div>
                <NavLink className={isActive} to={'useEffect'}> useEffect </NavLink>
            </div>

        </div>
    );
};

export default HooksNavLink;