import React, {useState} from 'react';
import './App.css';
// import {Route, Routes} from "react-router-dom";
// import Todo from "./Components/Todo";
// import TodoItem from "./Components/TodoItem";
import NavBar from "./Components/navBar/NavBar";
import Header from "./Components/Header/Header";
import TodoInput from "./Components/mainContent/TodoInput";
import List from "./Components/mainContent/List";
import {useAppDispatch} from "./hooks/hooks";
import {addTodos} from "./redux/todoSlice";

function App() {
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch()
    const addTask = () => {
        if (title.trim().length) {
            dispatch(addTodos(title))
            setTitle('')
        }
    }
    return (
        <div className="App">
            <div className={'Header'}>
                <Header/>
            </div>
            <div className={'NavBar'}>
                <NavBar/>
            </div>

            <div className={'Main'}>
                {/*<Routes>*/}
                {/*    <Route path={'/'} element={<Todo/>}/>*/}
                {/*    <Route path={'todoItem'} element={<TodoItem/>}/>*/}
                {/*    */}
                {/*</Routes>*/}
                <TodoInput title={title} setTitle={setTitle} addTodo={addTask}/>
                <List/>
            </div>
            <div className={'Footer'}>
                hi
            </div>
        </div>
    );
}

export default App;
