import React, {FC} from 'react';
import TestTodo from "./Test/TestTodo";

const Functions: FC = () => {
    const addSum = (a: number, b: number): number => {
        return a * b
    }

    const name = (name: string) => {
        return 'hello' + name
    }

    type Log = (message: string, userId?: string) => void

    const log: Log = (message, userId = 'Page loaded') => {
        let time = new Date().toISOString()
        console.log(time, message, userId || 'Not signet in')
    }
    console.log(log('Page loaded'))
    console.log( log('User signet in', 'da763be'))

    type Sum = (...number: number[]) => number

    const sum: Sum = (...number) => {
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
                {addSum(4, 5)}
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
            <TestTodo/>
        </div>
    );
};

export default Functions;