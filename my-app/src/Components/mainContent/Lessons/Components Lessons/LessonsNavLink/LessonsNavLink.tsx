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
            <NavLink className={isActive} to={'photo'}> Photo</NavLink>
            <NavLink className={isActive} to={'todo'}> Todos</NavLink>
        </div>
    );
};

export default LessonsNavLink;