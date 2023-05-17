import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

type Post = {
    id: number
    title: string
    body: string
}

const SinglePage = () => {
    const {id} = useParams()
    const [posts, setPosts] = useState<Post>()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(date => setPosts(date))
    },[id])
    return (
        <div>
            {posts && (
                <>
                    <a href="/lessons/posts">back menu</a>
                    <h3>{posts.title} </h3>
                    <p>{posts.body}</p>
                </>
            )}
        </div>
    );
};

export default SinglePage;