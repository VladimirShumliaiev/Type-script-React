import React from 'react';
import NavLinkHomeWork from "./NavLinkHomeWork/NavLinkHomeWork";
import RoutingHomeWork from "./RoutngsHomeWork/RoutingHomeWork";
import './HomeWork.css'

const HomeWork = () => {

    return (
        <div className={'HomeWork'}>
            <div>
                <NavLinkHomeWork/>
            </div>
            <div>
                <RoutingHomeWork/>
            </div>
        </div>
    );
};

export default HomeWork;