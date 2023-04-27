import React, {FC} from 'react';

type TestTodoItemProps = {
    id: number,
    title: string,
    completed: boolean
}

const TestTodoItem: FC<TestTodoItemProps> = ({id, completed, title}) => {
    return (
        <div>
            <input type="checkbox" checked={completed}/>
            {title}
            <button>x</button>
        </div>
    );
};

export default TestTodoItem;