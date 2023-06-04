import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomeWork from "../mainContent/HomeWork/HomeWork"
import Todo from "../mainContent/Todo/Todo"
import Layout from "../../Layout/Layout";
import LessonsTypeScript from "../mainContent/Lessons/LessonsTypeScript";
import HomePage from "../mainContent/HomePage/HomePage";

const LayoutCell = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'todo'} element={<Todo/>}/>
                    <Route path={'homeWork/*'} element={<HomeWork/>}/>
                    <Route path={'lessons/*'} element={<LessonsTypeScript/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default LayoutCell