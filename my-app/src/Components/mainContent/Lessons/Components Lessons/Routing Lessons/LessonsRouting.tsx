import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Photo from "../Photo/Photo";
import style from './LessonsRouting.module.css'
import TodoLessons from "../TodoLessons/TodoLessons";
import Examples from "../Examples/Examples";

const LessonsRouting: FC = () => {
    return (
        <div className={style.item}>
            <Routes>
                <Route path={'examples'} element={<Examples/>}/>
                <Route path={'photo'} element={<Photo/>}/>
                <Route path={'todo'} element={<TodoLessons/>}/>
            </Routes>
        </div>

    );
};

export default LessonsRouting;