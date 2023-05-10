import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import styles from './Posts.module.css'

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
    })
    return (
        <div className={styles.item}>
            {
                posts.map(post => (
                  <Link key={post.id} to={`/lessons/posts/${post.id}`}>
                        <li>{post.title}</li>
                      <pre/>
                  </Link>
                ))
            }
        </div>
    );
};

export default BlogPage;