import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

type Post = {
    id: number
    title: string
}

const BlogPage = () => {
    const [post, setPost] = useState<Post[]>([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=100`)
            .then(res => res.json())
            .then(date => setPost(date))
    }, [])

    return (
        <div>
            {
                post.map(post => (
                    <Link key={post.id} to={`/lessons/posts/${post.id}`}>
                        <div>
                            {post.title}
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default BlogPage;