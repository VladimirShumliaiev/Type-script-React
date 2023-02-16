import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Users from "../Users/Users";
import Photo from "../Photo/Photo";
import style from './LessonsRouting.module.css'
import TodoLessons from "../TodoLessons/TodoLessons";

const LessonsRouting: FC = () => {
    return (
        <div className={style.item}>
            <Routes>
                <Route path={'user'} element={<Users/>}/>
                <Route path={'photo'} element={<Photo/>}/>
                <Route path={'todoLessons'} element={<TodoLessons/>}/>
            </Routes>
        </div>

    );
};

export default LessonsRouting;