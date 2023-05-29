import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

type Post = {
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

const SinglePage = () => {
    const [posts, setPosts] = useState<Post>()
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(res => res.json())
            .then(date => setPosts(date))
    }, [id])
    return (
        <>

            {posts && (
                <div>
                    {posts.title}
                    <div>
                        <img src={posts.url} alt=""/>
                    </div>
                    <div>
                        <img src={posts.thumbnailUrl} alt=""/>
                    </div>
                </div>

            )}
        </>
    );
};

export default SinglePage;