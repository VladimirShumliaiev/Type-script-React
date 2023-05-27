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


    return (
        <div>
            Arrays
            {array.reverse().map((e,index) => <li key={index}>{e}</li>)}
        </div>
    );
};

export default ExampleArrays;