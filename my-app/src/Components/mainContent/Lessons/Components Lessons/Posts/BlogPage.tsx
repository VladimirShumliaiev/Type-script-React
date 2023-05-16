import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

type Post = {
    id: number
    title: string
}

const BlogPage = () => {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(date => setPosts(date))
    },[])

    return (
        <div>
            {
                posts.map(e => (
                    <Link key={e.id} to={`/lessons/posts/${e.id}`}>
                        <li>{e.title}</li>
                    </Link>
                ))
            }
        </div>
    );
};

export default BlogPage;