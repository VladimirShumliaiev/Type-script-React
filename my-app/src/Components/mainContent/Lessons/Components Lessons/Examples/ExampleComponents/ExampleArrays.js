import React from 'react';

const ExampleArrays = () => {

    function descriptions(...arg) {
        let [start,...remainig] = arg
        let [finish, ...stop] = remainig.reverse()
        console.log(`${arg.length}`)
        console.log(`${start}`)
        console.log(`${finish}`)
        console.log(`${stop.length}`)
    }

    descriptions('aaa', 'bbb','acccaa','fff','dddd',)


    return (
        <div>
            Arrays
        </div>
    );
};

export default ExampleArrays;