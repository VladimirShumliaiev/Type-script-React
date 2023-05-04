import React from 'react';
import {NavLink} from "react-router-dom";

type IsActive = {
    isActive: boolean
}

const NavLinkExamples = () => {

    const isActive = ({isActive}:IsActive) => isActive ? 'active-examples' : ''
    return (
        <div className={'hr'}>
            {'|'}
            <NavLink className={isActive} to={'examplesObject'}> Object </NavLink>
            {'|'}
            <NavLink className={isActive} to={'examplesFunction'}> Function </NavLink>
            {'|'}
            <NavLink className={isActive} to={'examplesArray'}> Array </NavLink>
            {'|'}
        </div>
    );
};

export default NavLinkExamples;