import React, {FC} from 'react';

const Examples: FC = () => {
    let a = 1 + 2;
    let b = a + 3;

    let c = {
        apple: a,
        banana: b,
    }

    let d = c.banana * 4

    return (
        <div>
            {d}
        </div>
    );
};

export default Examples