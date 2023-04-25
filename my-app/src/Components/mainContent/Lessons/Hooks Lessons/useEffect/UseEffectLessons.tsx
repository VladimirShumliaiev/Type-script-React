import React, {FC, useEffect} from 'react';

const UseEffectLessons: FC = () => {
    useEffect(() => {
        alert('Hello world')
        console.log(alert)
    },[])
    return (
        <div>
            useEffect
        </div>
    );
};

export default UseEffectLessons;