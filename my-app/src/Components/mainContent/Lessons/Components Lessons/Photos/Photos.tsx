import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import {fetchPhotos} from "../../../../../redux/Slices/photosSlice";
import PhotosList from "./PhotosList";
import axios from "axios";

type Photo = {
    albumId: number
    id: number
    title: string
    thumbnailUrl: string
    url: string

}

const Photos = () => {
    const [photo, setPhoto] = useState<Photo[]>([])
    const [page, setPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const dispatch = useAppDispatch()

    const scrollHandler = (e: any) => {
        if ( e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            console.log('scroll')
        }
    }

    useEffect(() => {
        if (fetching) {
            // dispatch(fetchPhotos())
            axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=50&_page=${page}`)
                .then(response => {
                    setPhoto([...photo,...response.data])
                    setPage(prevState => prevState + 1)
                })
                .finally(() => setFetching(false))

        }

    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    return (
        <div>
            <PhotosList/>
            {
                photo.map(e => (
                    <div key={e.id}>
                        {e.id}
                        {e.albumId}
                        {e.title}
                        <div>

                        </div>
                        <div>
                            <img src={e.thumbnailUrl} alt=""/>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Photos;