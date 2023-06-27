import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import style from './Posts.module.css'

type Post = {
    id: string
    title: string
    url: string
    thumbnailUrl: string
}

const BlogPage = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [currentItems, setCurrentItems] = useState(posts);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 25

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(posts.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(posts.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, posts]);


    const handlePageClick = (event: any) => {
        const newOffset = event.selected * itemsPerPage % posts.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then
        (({data}) => setPosts(data))
    },[])

    return (
        <div>
            {currentItems.map(e => (
                <li>
                    <Link key={e.id} to={`/lessons/posts/${e.id}`}>{e.title}</Link>
                </li>
            ))}
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="< previous"
                pageLinkClassName={style.pageNum}
                previousLinkClassName={style.pageNum}
                nextLinkClassName={style.pageNum}
                breakLabel="..."
                containerClassName={style.pagination}
                activeClassName={style.active}
                activeLinkClassName={style.active}
            />
        </div>
    );
};

export default BlogPage;