import React from 'react';

const ExampleFunctions = () => {
        //
        // const lordify = (regularPerson) => {
        //     console.log(`${regularPerson.firstName} of Canterbury`)
        // }

    const lordify = ( {spouse: {firstName} } ) => {
        console.log(`${firstName} of Canterbury`)
    }

        const regularPerson = {
            firstName: 'Bill',
            lastName: 'Wilson',
            spouse: {
                firstName: 'Mike',
                lastName: 'Wilson',
            }
        }

        lordify(regularPerson)

    const name = 'Mike'
    const elevation = 9738

    const obj = {name, elevation}

    const test = {
        id: 1,
        title: 'abc',
        completed: true
    }

    console.log(obj)

    const array = [['1', '2']]
    const array2 = [['3', '4']]

    const arrayAll = [...array, ...array2, {...test},name]

    console.log(arrayAll.map(e => e))



    const str = 'Restaurants in Hanalei'
    const urlFriendly = str.replace('-')

    console.log(urlFriendly)
    return (
        <div>
           function
        </div>
    );
};

export default ExampleFunctions;