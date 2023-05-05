import React, {FC} from 'react';
import './Hooks.css'
import HooksNavLink from "./Hooks Navlink/HooksNavLink";
import HooksRouting from "./Hooks Routing/HooksRouting";

const Hooks: FC = () => {
    return (
        <div className={'item'}>
            <div>
                <HooksNavLink/>
            </div>
            <div>
                <HooksRouting/>
            </div>

        </div>
    );
};

export default Hooks;