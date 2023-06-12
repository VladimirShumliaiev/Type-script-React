import React, {useEffect, useState} from 'react';
import style from './Pagination.module.css'
import ReactPaginate from "react-paginate";

const Images = (props) => {
    const {data} = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % data.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <>
            <div>
                {currentItems.map(image => {
                    return (
                        <div key={image.id}>
                            <img src={image.url} alt={image.title}/>
                        </div>
                    )
                })}
            </div>
            <div>
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
        </>
    );
};

export default Images;