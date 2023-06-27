import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

type Post = {
    id: string
    title: string
    url: string
    thumbnailUrl: string
}

const BlogPage = () => {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then
        (({data}) => setPosts(data))
    },[])

    return (
        <div>
            {posts.map(e => (
                <div>
                    <Link key={e.id} to={`/lessons/posts/${e.id}`}>{e.title}</Link>
                </div>
            ))}
        </div>
    );
};

export default BlogPage;