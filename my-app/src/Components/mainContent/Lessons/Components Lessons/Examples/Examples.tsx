import React, {FC} from 'react';
import './Examples.css'
import NavLinkExamples from "./ExampleComponents/NavLinkExample/NavLinkExamples";
import RoutingExamples from "./ExampleComponents/RoutingExample/RoutingExamples";

const Examples: FC = () => {

    return (
        <div className={'itemExamples'}>
            <div className={'itemExamplesUp'}>
                <div>
                    <NavLinkExamples/>
                    <hr/>
                </div>
            </div>
            <div className={'itemExamplesDawn'}>
                <div>
                   <RoutingExamples/>
                </div>

            </div>
        </div>
    );
};

export default Examples;
