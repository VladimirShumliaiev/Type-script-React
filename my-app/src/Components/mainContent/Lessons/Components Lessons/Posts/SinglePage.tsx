import React, {useEffect, useState} from 'react';
import {Link, Route, Routes, useParams} from "react-router-dom";
import BlogPage from "./BlogPage";
import styles from './Posts.module.css'


type Posts = {
    title: string
    body: string
}

const SinglePage = () => {
    const {id} = useParams()
    const [posts, setPosts] = useState<Posts>()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(date => setPosts(date))
    }, [id])

    return (
        <div className={styles.item}>
            {posts && (
                <>
                    <h3>{posts.title}</h3>
                    <p>{posts.body}</p>

                    <Link to={'posts'}>
                        back to page
                    </Link>

                    <div className={styles.itemBackToPage}>
                        <Routes>
                            <Route path={'posts'} element={<BlogPage/>}/>
                        </Routes>
                    </div>
                </>
            )}
        </div>
    );
};

export default SinglePage;