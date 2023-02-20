import React from 'react';

const Chapter3 = () => {
    //Number
    let a = 1042;
    //String
    let b = 'apples and oranges';
    //string
    const c = 'pineapples';
    //boolean
    let d = [true,true,false]
    //object
    let e =  {type: 'ficus'}
    //number || boolean
    let f = [1, false]
    //number
    const g = [3]
    //any
    let h = null
    return (
        <div>
            {g}
        </div>
    );
};

export default Chapter3;