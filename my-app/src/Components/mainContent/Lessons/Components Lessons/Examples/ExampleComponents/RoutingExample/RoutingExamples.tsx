import React from 'react';
import {Route, Routes} from "react-router-dom";
import ExampleObjet from '../ExampleObject/ExampleObject';
import ExampleFunctions from "../ExampleObject/ExampleObject";
import ExampleArrays from "../ExampleArrays";
import ExampleAll from "../ExampleAll/ExampleAll";

const RoutingExamples = () => {
    return (
        <div>
            <Routes>
                <Route path={'examplesObject'} element={<ExampleObjet/>}/>
                <Route path={'examplesFunction'} element={<ExampleFunctions/>}/>
                <Route path={'examplesArray'} element={<ExampleArrays/>}/>
                <Route path={'examplesAll'} element={<ExampleAll/>}/>
            </Routes>
        </div>
    );
};

export default RoutingExamples;