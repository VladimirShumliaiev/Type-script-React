import React, {useEffect, useState} from 'react';
import style from './Pagination.module.css'
import axios from "axios";
import Images from "./Images";

const Pagination = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then(res => setImages(res.data))
    },[])

    return (
        <div className={style.item}>
           <Images data={images}/>
        </div>
    );
};

export default Pagination;