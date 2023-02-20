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
            <NavLink className={isActive} to={'examples'}>Examples </NavLink>
            <NavLink className={isActive} to={'functions'}> Functions</NavLink>
            <NavLink className={isActive} to={'objects'}> Objects</NavLink>
        </div>
    );
};

export default LessonsNavLink;