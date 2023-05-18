import React from 'react';

import {useAppSelector} from "../../../../../hooks/hooks";
import PhotosItem from "./PhotosItem";

const PhotosList = () => {
    const photoList = useAppSelector(state => state.photos.photosList)
    return (
        <div>
            {
                photoList.map(e => <PhotosItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default PhotosList;