import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../hooks/hooks";
import TodoListItem from "./TodoListItem";
import ReactPaginate from "react-paginate";
import style from './Todo.module.css'

const TodoList = () => {
    const selector = useAppSelector(state => state.todo.todoList)
    const [currentItems, setCurrentItems] = useState(selector);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(selector.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(selector.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,selector]);


    const handlePageClick = (event: any) => {
        const newOffset = event.selected * itemsPerPage % selector.length;
        setItemOffset(newOffset);
    };
    return (
        <div>
            {
                currentItems.map(e => <TodoListItem key={e.id} {...e}/>)
            }
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
        </div>
    );
};

export default TodoList;