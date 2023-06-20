import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

type Posts = {
    id: string
    title: string
    url: string
    thumbnailUrl: string
}

const SinglePage = () => {
    const [posts, setPosts] = useState<Posts>()
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
                    </div>
                    <div>
                        <img src={posts.thumbnailUrl} alt=""/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SinglePage;