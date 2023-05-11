import React from 'react';

const ExampleFunctions = () => {

    // const fnWithError = () => {
    //     throw new Error('ERROR ERROR')
    // }
    //
    // try {
    //     fnWithError()
    // } catch (error) {
    //     console.error(error)
    //     console.log(error.message)
    // }

    const age = 66



    if (age > 65) {
        console.log('mnogo')
    }

    if (age <= 65 && age >=18) {
        console.log('normalno')
    }

    if (age < 12) {
        console.log('malo')
    }

    // console.log('Continue')
    return (
        <div>
            Functions
        </div>
    );
};

export default ExampleFunctions;