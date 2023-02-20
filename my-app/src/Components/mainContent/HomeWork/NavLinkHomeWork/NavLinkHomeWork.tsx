import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import './NavLinkHomeWork.css'

type isActiveProp = {
    isActive: boolean
}

const NavLinkHomeWork: FC = () => {
    const isActive = ({isActive}: isActiveProp) => isActive ? 'navLinkHomeWork-active-link' : '';
    return (
        <div className={'navLinkHomeWork'}>
            <div>
                <NavLink className={isActive} to={'chapter2'}>Exercise for chapter 2 </NavLink>
            </div>
          <div>
              <NavLink className={isActive} to={'chapter3'}> Exercise for chapter 3</NavLink>
          </div>
        </div>
    );
};

export default NavLinkHomeWork;