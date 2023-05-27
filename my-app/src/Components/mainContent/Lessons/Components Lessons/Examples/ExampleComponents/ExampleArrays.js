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

    const ages = [21, 24, 18, 14, 35, 54, 64]

    const maxAge = ages.reduce((max, age) => {
        if (age > max) {
            return age
        } else {
            return max
        }
    }, 0)

    const maxAge2 = ages.reduce((max, age) => (age > max ? age : max), 75)

    const colors = [
        {
            id: 'xekare',
            title: 'red red',
            rating: 3
        },
        {
            id: 'jbwsof',
            title: 'blue blue',
            rating: 2
        },
        {
            id: 'prigbj',
            title: 'grizzly grey',
            rating: 5
        }
    ]

    const hashColors = colors.reduce((hash, {id, title, rating}) => {
        hash[id] = {title, rating};
        return hash;
    }, {})

    console.log(hashColors)

    const manAge = [12, 34, 32, 23, 43, 56, 67]

    const maxManAge = manAge.reduce((max, age) => {
        if (age > max) {
            return age
        }

        if (age < max) {
            return max
        }
    }, 0)

    const maxManAgeTwo = manAge.reduce((max, age) => (age > max ? age : max), 0)


    return (
        <div>
            Arrays
            <hr/>
            {array3.reverse().map((e, index) => <li key={index}>{e}</li>)}
            <hr/>
            {maxAge}
            <hr/>
            {maxAge2}
            <hr/>
            {maxManAge}
            {maxManAgeTwo}
        </div>
    );
};

export default ExampleArrays;