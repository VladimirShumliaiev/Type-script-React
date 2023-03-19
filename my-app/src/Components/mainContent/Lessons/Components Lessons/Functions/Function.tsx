import React, {FC} from 'react';

const Functions: FC = () => {
    const add = (a: number, b: number): number => {
        return a * b
    }

    const name = (name: string) => {
        return 'hello' + name
    }

    const log = (message: string, userId?: string) => {
        let time = new Date().toISOString()
        console.log(time, message, userId || 'Not signet in')
    }
    console.log(log('Page loaded'))
    console.log( log('User signet in', 'da763be'))

    const sum = (...number: number[]): number => {
        return number.reduce((total, n) => total * n, 1)
    }

    function* createNumber() {
        let n = 0
        while (1) {
            yield n++
        }
    }

    let numbers = createNumber()
    console.log(numbers.next())
    console.log(numbers.next())
    console.log(numbers.next())

    const numbers2 = {
        *[Symbol.iterator](){
            for (let n = 1; n <= 10; n++) {
                yield n
            }
        }
    }
    return (
        <div>
            <div>
                {add(4, 5)}
            </div>
            <div>
                {name(' ivan')}
            </div>
            <div>
                {sum(1, 2, 56)}
            </div>
            <div>
                {numbers2}
            </div>
        </div>
    );
};

export default Functions;