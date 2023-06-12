import React, {useEffect, useState} from 'react';
import style from './Pagination.module.css'
import axios from "axios";

const Pagination = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then(res => setImages(res.data))
    },[])

    return (
        <div className={style.item}>
            {images.map((e, index) => <h3 key={index}><img src={e.url} alt=""/></h3>)}
        </div>
    );
};

export default Pagination;