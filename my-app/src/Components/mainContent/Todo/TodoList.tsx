import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../hooks/hooks";
import TodoListItem from "./TodoListItem";
import ReactPaginate from "react-paginate";
import style from './Todo.module.css'

const TodoList = () => {
    const list = useAppSelector(state => state.todo.todoList)
    const [currentItems, setCurrentItems] = useState(list);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(list.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(list.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, list]);

    const handlePageClick = (event: any) => {
        const newOffset = event.selected * itemsPerPage % list.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };
    return (
        <div>
            {
                currentItems.map(todos => <TodoListItem key={todos.id} {...todos}/>)
            }
            {
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName={style.Pagination}
                    pageLinkClassName={style.pageNum}
                    previousLinkClassName={style.pageNum}
                    nextLinkClassName={style.pageNum}
                    activeLinkClassName={style.active}
                />
            }
        </div>
    );
};

export default TodoList;