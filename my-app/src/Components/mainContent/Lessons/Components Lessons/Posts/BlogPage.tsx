import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

type Posts = {
    id: string
    title: string
}

const BlogPage = () => {
    const [posts, setPosts] = useState<Posts[]>([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then
        (({data}) => setPosts(data))
    }, [])

    return (
        <div>
            {posts.map(post => (
                <Link key={post.id} to={`/lessons/posts/${post.id}`}>
                    <div>{post.title}</div>
                </Link>
            ))}
        </div>
    );
};

export default BlogPage;