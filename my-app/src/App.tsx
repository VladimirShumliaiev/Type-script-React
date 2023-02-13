import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Todo from "./Components/Todo";
import TodoItem from "./Components/TodoItem";
import NavBar from "./Components/navBar/NavBar";
import Header from "./Components/Header/Header";

function App() {
    return (
        <div className="App">
            <div className={'Header'}>
                <Header/>
            </div>
            <div className={'NavBar'}>
                <NavBar/>
            </div>

            <div className={'Main'}>
                <Routes>
                    <Route path={'/'} element={<Todo/>}/>
                    <Route path={'todoItem'} element={<TodoItem/>}/>
                </Routes>
            </div>
            <div className={'Footer'}>
                hi
            </div>
        </div>
    );
}

export default App;
