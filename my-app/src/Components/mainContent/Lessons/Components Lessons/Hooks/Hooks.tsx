import React, {FC} from 'react';
import './Hooks.css'
import HooksNavLink from "./Hooks Navlink/HooksNavLink";
import HooksRouting from "./Hooks Routing/HooksRouting";

const Hooks: FC = () => {
    return (
        <div className={'item'}>
            <div className={'NavLink'}>
                <HooksNavLink/>
            </div>
            <div className={'Routing'}>
                <HooksRouting/>
            </div>

        </div>
    );
};

export default Hooks;