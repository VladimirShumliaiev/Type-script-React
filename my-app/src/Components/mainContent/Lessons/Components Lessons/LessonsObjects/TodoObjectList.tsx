import React, {FC} from 'react';
import {useAppSelector} from "../../../../../hooks/hooks";
import TodoObjectListItem from "./TodoObjectListItem";

const  TodoObjectList: FC = () => {
    const list = useAppSelector(state => state.todoObject.list)
    return (
        <div>
            {
                list.map(e => <TodoObjectListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TodoObjectList;