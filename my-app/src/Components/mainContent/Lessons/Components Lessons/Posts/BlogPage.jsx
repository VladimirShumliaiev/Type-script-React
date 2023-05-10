import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const BlogPage = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    },[])
    return (
        <div>
            <h1>Our news</h1>
            {
                post.map(post => (
                    <Link key={post.id} to={`/lessons/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    );
};

export default BlogPage;