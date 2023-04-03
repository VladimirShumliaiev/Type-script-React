import React, {FC} from 'react';

type TodoProps = {
    id: string,
    completed: boolean,
    title: string,
}

const TodoLessonsListItem: FC<TodoProps> = ({id, completed, title}) => {
    return (
        <div>
            <input type={"checkbox"} checked={completed}/>
            {title}
            <button>&times;</button>
        </div>
    );
};

export default TodoLessonsListItem;