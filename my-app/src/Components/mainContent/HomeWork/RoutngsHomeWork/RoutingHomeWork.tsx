import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import style from './RoutingHomeWork.module.css'
import Chapter2 from "../ComponentsHomeWork/Chapter2";
import Chapter3 from "../ComponentsHomeWork/Chapter3";
import Chapter4 from "../ComponentsHomeWork/Chapter4";
import Chapter5 from "../ComponentsHomeWork/Chapter5";


const RoutingHomeWork: FC = () => {
    return (
        <div className={style.item}>
            <Routes>
                <Route path={'chapter2'} element={<Chapter2/>}/>
                <Route path={'chapter3'} element={<Chapter3/>}/>
                <Route path={'chapter4'} element={<Chapter4/>}/>
                <Route path={'chapter5'} element={<Chapter5/>}/>
            </Routes>
        </div>
    );
};

export default RoutingHomeWork;