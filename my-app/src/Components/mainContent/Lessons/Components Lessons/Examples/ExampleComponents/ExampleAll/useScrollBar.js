import React, {useEffect} from 'react';
import {OverlayScrollbars} from "overlayscrollbars";


export const useScrollBar = (root, hasScroll) => {

    const config = {}

    useEffect(() => {
        let scrollBars

        if (root.current, hasScroll) {
            scrollBars = OverlayScrollbars(root.current, config)
        }

        return () => {
            if (scrollBars) {
                scrollBars.destroy();
            }
        }
    }, [root, hasScroll])
    return (
        <div>

        </div>
    );
};

