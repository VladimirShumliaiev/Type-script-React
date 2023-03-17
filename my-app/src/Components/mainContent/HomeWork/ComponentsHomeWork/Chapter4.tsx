import React from 'react';

const Chapter4 = () => {

    let a = 1042
    //a = number
    let b = 'apples and oranges'
    // b = string
    const c = 'pineapples'
    // c = pineapples
    let d = [true, true, false]
    // d = boolean[]
    let f = [1, false]
    // f = (number | boolean)[]
    const g = [3]
    // g = number[]
    let h = null
    // h = any

    // let i: 3 = 3
    // i = 4

    // let j = [1, 2, 3]
    // j.push(4)
    // j.push('5')

    // let k: never = 4

    // let i: unknown = 4
    // let m = i * 2
    return (
        <div>
            {a} {b} {c} {d} {f} {g} {h}
        </div>
    );
};

export default Chapter4;