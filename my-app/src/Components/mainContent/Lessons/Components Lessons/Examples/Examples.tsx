import React, {FC, useState} from 'react';
import Count from "./Count";
import Quiz from "./Quiz/Quiz";
import Input from "./Input/Input";

const Examples: FC = () => {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState('')
    // let a = 1 + 2;
    // let b = a + 3;
    //
    // let c = {
    //     apple: a,
    //     banana: b,
    // }
    //
    // let d = c.banana * 4


    return (
        <div>
            <Count count={count} setCount={setCount}/>
            <hr/>
            <Input title={title} setTitle={setTitle}/>
            <Quiz/>
        </div>
    );
};

export default Examples