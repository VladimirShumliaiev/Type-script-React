import React from 'react';

const Chapter2 = () => {

    let a = 1 + 2
    let b = a + 3
    let c = {
        apple: a,
        banana: b,
    }

    let d = c.apple * 2
    return (
        <div>
            {d}
        </div>
    );
};

export default Chapter2;