import React, { useEffect, useState } from 'react';
import {useAppSelector} from "../../../../../hooks/hooks";
import UsersItemExample from "./UsersItem";
import ReactPaginate from "react-paginate";
import style from './Users.module.css'



const UsersList = () => {
    const list = useAppSelector(state => state.usersObject.users)
    const [currentItems, setCurrentItems] = useState(list);
    const [pageCount, setPageCount] = useState(0);
    const itemsPerPage = 2
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(list.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(list.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, list]);

    const handlePageClick = (event: any) => {
        const newOffset = event.selected * itemsPerPage % list.length;
        setItemOffset(newOffset);
    };
    return (
        <ol>
            {
                currentItems.map((e, index ) => <UsersItemExample key={index} {...e}/>)
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
        </ol>
    );
};

export default UsersList;