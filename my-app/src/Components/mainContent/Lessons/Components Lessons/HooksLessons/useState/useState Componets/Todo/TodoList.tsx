import React, {FC} from 'react';

type Todo = {
    id: number
    title: string
    completed: boolean
}

type TodoListProps = {
    todoList: Todo[]
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void
}

const TodoList: FC<TodoListProps> = ({todoList, removeTodo, toggleTodo}) => {
    return (
        <div>
            {
                todoList.map(e =>)
            }
        </div>
    );
};

export default TodoList;