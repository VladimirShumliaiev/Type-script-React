import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import style from './LessonsRouting.module.css'
import Examples from "../../Examples/Examples";
import Functions from "../../Functions/Function";
import AboutTypes from "../../About Types/AboutTypes";
import Users from "../../LessonsObjects/Users";
import Hooks from "../../HooksLessons/Hooks";
import ReduxToolkitExample from "../../Redux-toolkit/ReduxToolkitExample";
import BlogPage from "../../Posts/BlogPage";
import SinglePage from "../../Posts/SinglePage";
import Board from "../../TticTacToe/Board";
import Photos from "../../Photos/Photos";
import Quiz from "../../Quiz/Quiz";
import SelectLessons from "../../Select Menu/SelectLessons";



const LessonsRouting: FC = () => {
    return (
        <div className={style.item}>
            <Routes>
                <Route path={'examples/*'} element={<Examples/>}/>
                <Route path={'aboutType'} element={<AboutTypes/>}/>
                <Route path={'functions'} element={<Functions/>}/>
                <Route path={'objects'} element={<Users/>}/>
                <Route path={'hooks/*'} element={<Hooks/>}/>
                <Route path={'rtk'} element={<ReduxToolkitExample/>}/>
                <Route path={'posts'} element={<BlogPage/>}/>
                <Route path={'posts/:id'} element={<SinglePage/>}/>
                <Route path={'ticTacToe'} element={<Board/>}/>
                <Route path={'photos'} element={<Photos/>}/>
                <Route path={'quiz'} element={<Quiz/>}/>
                <Route path={'select'} element={<SelectLessons/>}/>
            </Routes>
        </div>

    );
};

export default LessonsRouting;