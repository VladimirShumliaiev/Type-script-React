import React, {FC} from 'react';
import TodoItem from "./TodoItem";


type Todo = {
    id: number
    title: string
    completed: boolean
}

type TodoListProps = {
    todoList: Todo[]
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoList: FC<TodoListProps> = ({todoList, removeTodo, toggleTodo}) => {

    return (
        <div>
            {
                todoList.map(e => <TodoItem
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TodoList;