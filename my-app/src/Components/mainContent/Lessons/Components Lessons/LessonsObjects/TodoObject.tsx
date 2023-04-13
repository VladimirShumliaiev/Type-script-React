import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../../hooks/hooks";
import {addTodoFetch, fetchTodoObject} from "../../../../../redux/Slices/lessonsObjectSlice";
import TodoObjectForm from "./TodoObjectForm";
import TodoObjectList from "./TodoObjectList";

const TodoObject = () => {
    const [title, setTitle] = useState('')
    const {error, loading} = useAppSelector(state => state.todoObject)
    const dispatch = useAppDispatch()

    const addTask = () => {
        if (title.trim().length) {
            dispatch(addTodoFetch(title))
        }
    }

  useEffect(() => {
      dispatch(fetchTodoObject())
  },[])


    return (
        <div>
            <TodoObjectForm title={title} setTitle={setTitle} addTodo={addTask}/>
            {loading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            <TodoObjectList/>
        </div>
    );
};

export default TodoObject;