import React from 'react';
import {NavLink} from "react-router-dom";

const MyNavLink = () => {
    return (
        <div>
            <NavLink to={'/'}>Type-Script</NavLink>
            <NavLink to={'todoItem'}>Type-Script2</NavLink>
        </div>
    );
};

export default MyNavLink;