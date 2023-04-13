import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import {fetchTodoObject} from "../../../../../redux/Slices/lessonsObjectSlice";
import TodoObjectForm from "./TodoObjectForm";
import TodoObjectList from "./TodoObjectList";

const TodoObject = () => {
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch()

  useEffect(() => {
      dispatch(fetchTodoObject())
  },[])


    return (
        <div>
            <TodoObjectForm title={title} setTitle={setTitle}/>
            <TodoObjectList/>
        </div>
    );
};

export default TodoObject;