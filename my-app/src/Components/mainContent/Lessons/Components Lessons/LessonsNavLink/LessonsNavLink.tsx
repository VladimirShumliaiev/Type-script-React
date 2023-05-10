import React from 'react';
import {NavLink} from "react-router-dom";
import './LessonseNavLink.css'

type IsActiveProps = {
    isActive: boolean
}

const LessonsNavLink = () => {
    const isActive = ({isActive}: IsActiveProps) => isActive ? 'lessons-active-link' : '';
    return (
        <div className={'lessons'}>
            {'|'}<NavLink className={isActive} to={'examples'}> Examples </NavLink>{'|'}
            <NavLink className={isActive} to={'aboutType'}> About Type </NavLink>{'|'}
            <NavLink className={isActive} to={'functions'}> Functions </NavLink>{'|'}
            <NavLink className={isActive} to={'objects'}> Objects </NavLink>{'|'}
            <NavLink className={isActive} to={'hooks'}> Hooks </NavLink>{'|'}
            <NavLink className={isActive} to={'rtk'}> Redux toolkit </NavLink>{'|'}
            <NavLink className={isActive} to={'posts'}> Posts </NavLink>{'|'}
        </div>
    );
};

export default LessonsNavLink;