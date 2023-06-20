import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import style from './Posts.module.css'

type Posts = {
    id: string
    title: string
}

const BlogPage = () => {
    const [posts, setPosts] = useState<Posts[]>([])
    const [currentItems, setCurrentItems] = useState(posts);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5

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
    }, [])

    return (
        <div>
            {currentItems.map(post => (
                <Link key={post.id} to={`/lessons/posts/${post.id}`}>
                    <div>{post.title}</div>

                </Link>
            ))}
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
        </div>
    );
};

export default BlogPage;