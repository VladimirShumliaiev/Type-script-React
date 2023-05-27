import React from 'react';

const ExampleArrays = () => {

    function descriptions(...arg) {
        let [start, ...remainig] = arg
        let [finish, ...stop] = remainig.reverse()
        console.log(`${arg.length}`)
        console.log(`${start}`)
        console.log(`${finish}`)
        console.log(`${stop.length}`)
    }

    descriptions('aaa', 'bbb', 'acccaa', 'fff', 'dddd',)

    const array = [15, 14, 13, 12, 11]

    const array2 = ['a', 'b', 'c', 255]

    array2.push('aaaa5555')
    array2.unshift('xxxx5555')

    const array3 = [
        ...array,
        ...array2
    ]


    return (
        <div>
            Arrays
            {array3.reverse().map((e,index) => <li key={index}>{e}</li>)}
        </div>
    );
};

export default ExampleArrays;