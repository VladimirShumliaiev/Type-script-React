import React from 'react';
import Search from "../Search/ Search";

const Input = ({}) => {
    return (
            <form onSubmit={e => {
                e.preventDefault()
            }}>
                <input type={''}/>
                <Search/>
            </form>
    );
};

export default Input;