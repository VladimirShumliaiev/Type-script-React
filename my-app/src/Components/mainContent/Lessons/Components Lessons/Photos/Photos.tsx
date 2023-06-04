import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import {fetchPhotos} from "../../../../../redux/Slices/photosSlice";
import PhotosList from "./PhotosList";


const Photos = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPhotos())
    }, [])


    return (
        <div>
            <PhotosList/>
        </div>
    );
};

export default Photos;