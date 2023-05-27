import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

type Post = {
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

const SinglePage = () => {
    const {id} = useParams()
    const [post, setPost] = useState<Post>()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(res => res.json())
            .then(date => setPost(date))
    },[id])

    return (
        <div>
            {post && (
                <>
                    <h3>{post.title}</h3>
                    <div>
                        <img src={post.url} alt=""/>
                    </div>
                    <div>
                        <img src={post.thumbnailUrl} alt=""/>
                    </div>
                </>
            )
            }

        </div>
    );
};

export default SinglePage;