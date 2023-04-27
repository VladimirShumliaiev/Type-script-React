import React, {FC} from 'react';
import TestTodoItem from "./TestTodoItem";

type ITodo = {
    id: number,
    title: string,
    completed: boolean
}

type TestTodoListProps = {
    item: ITodo[]
}

const TestTodoList: FC<TestTodoListProps> = ({item}) => {
    return (
        <div>
            {
                item.map(e => <TestTodoItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TestTodoList;