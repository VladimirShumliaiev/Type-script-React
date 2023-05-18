import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

type Posts = {
    id: number
    title: string
}

const BlogPage = () => {
    const [posts, setPosts] = useState<Posts[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(date => setPosts(date))
    },[])

    return (
        <div>
            {
                posts.map(post => [
                    <Link key={post.id} to={`/lessons/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ])
            }
        </div>
    );
};

export default BlogPage;