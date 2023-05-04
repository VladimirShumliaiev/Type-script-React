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

    console.log('Continue')
    return (
        <div>
            Functions
        </div>
    );
};

export default ExampleFunctions;