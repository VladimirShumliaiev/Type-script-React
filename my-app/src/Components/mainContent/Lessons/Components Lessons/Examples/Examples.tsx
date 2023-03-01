import React, {FC, useState} from 'react';
import Count from "./Count";
import Quiz from "./Quiz/Quiz";

const Examples: FC = () => {
    const [count, setCount] = useState(0)
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
            <Quiz/>
        </div>
    );
};

export default Examples