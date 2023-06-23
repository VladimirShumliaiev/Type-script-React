import React, {FC, useEffect, useState} from 'react';
import TodoItem from "../TodoItem/TodoItem";
import ReactPaginate from "react-paginate";
import style from '../Todo.module.css'

type Todo = {
    id: number
    title: string
    completed: boolean
}

type TodoListProps = {
    todos: Todo[]
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void
}

const TodoList: FC<TodoListProps> = (props) => {
    const {todos, toggleTodo, removeTodo} = props
    const [showModal, setShowModal] = useState<boolean>(false)
    const [currentItems, setCurrentItems] = useState<Todo[]>([])
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0)
    const itemsPerPage = 10

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(todos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(todos.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, todos]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % todos.length;
        setItemOffset(newOffset);
    };



    return (
        <div>

            {
                currentItems.map(todo => <TodoItem
                    showModal={showModal}
                    setShowModal={setShowModal}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    key={todo.id} {...todo}/>)
            }

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={style.pagination}
                pageLinkClassName={style.pageNum}
                previousLinkClassName={style.pageNum}
                nextLinkClassName={style.pageNum}
                activeLinkClassName={style.active}
            />

        </div>
    );
};

export default TodoList;