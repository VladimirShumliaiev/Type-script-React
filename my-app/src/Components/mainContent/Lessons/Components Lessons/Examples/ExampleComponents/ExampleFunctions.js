import React from 'react';

const ExampleFunctions = () => {

    const fnWithError = () => {
        throw new Error('ERROR ERROR')
    }

    try {
        fnWithError()
    } catch (error) {
        console.error(error)
        console.log(error.message)
    }

    const age = 25

    if (age >= 18) {
        console.log('man')
    }

    if (age >= 12 && age < 18) {
        console.log('unior')
    }

    if (age < 12) {
        console.log('babby')
    }

    console.log('Continue')
    return (
        <div>
            Functions
        </div>
    );
};

export default ExampleFunctions;