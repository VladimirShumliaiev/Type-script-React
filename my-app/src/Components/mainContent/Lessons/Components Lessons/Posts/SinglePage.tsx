import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

type Post = {
    title: string
    body: string
    userId: number
}

const SinglePage = () => {
    const {id} = useParams()
    const [posts, setPosts] = useState<Post>()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(date => setPosts(date))
    }, [id])
    return (
        <div>
            {posts && (
                <>
                    <p>UserId: {posts.userId}</p>
                    <h3>{posts.title}</h3>
                    <p>{posts.body}</p>
                </>
            )}
        </div>
    );
};

export default SinglePage;