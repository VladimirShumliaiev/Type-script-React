import React, {FC} from 'react';
import styles from './Photos.module.css'

type Photos = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

const PhotosItem: FC<Photos> = (props) => {
    const {albumId, url, thumbnailUrl, id, title} = props
    return (
        <div>
            <div>
                <h3>
                    albumId: {albumId}
                    <div>
                        id: {id}
                    </div>
                </h3>
            </div>
            {title}
            <div className={styles.item}>
                <img src={url} alt=""/>
            </div>
            <div className={styles.itemTwo}>
                <img src={thumbnailUrl} alt=""/>
            </div>
        </div>
    );
};

export default PhotosItem;