import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomeWork from "../mainContent/HomeWork/HomeWork"
import Layout from "../../Layout/Layout"
import Todo from "../mainContent/Todo/Todo"
import LessonsTypeScript from "../mainContent/Lessons/LessonsTypeScript";


const AppCell = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Todo/>}/>
                    <Route path={'homeWork'} element={<HomeWork/>}/>
                    <Route path={'lessons/*'} element={<LessonsTypeScript/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default AppCell;