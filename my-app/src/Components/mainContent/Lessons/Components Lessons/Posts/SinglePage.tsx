import React, {useEffect, useState} from 'react';
import {Posts} from "./BlogPage";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const SinglePage = () => {
    const [posts, setPosts] = useState<Posts>()
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`).then
        (({data}) => setPosts(data))
    }, [])

    return (
        <div>
            {posts && (
                <div>
                    <div>
                        <Link to={'/lessons/posts'}>
                            <h3>
                            BACK
                        </h3>
                        </Link>
                    </div>
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