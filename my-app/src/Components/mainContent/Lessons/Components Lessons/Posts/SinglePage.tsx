import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

type Post = {
    id: string
    title: string
    url: string
    thumbnailUrl: string
}

const SinglePage = () => {
    const [posts, setPosts] = useState<Post>()
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`).then
        (({data}) => setPosts(data))
    },[])

    return (
        <div>
            {posts && (
                <div>
                    {posts.title}
                    <div>
                        <img src={posts.url} alt=""/>
                        <img src={posts.thumbnailUrl} alt=""/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SinglePage;