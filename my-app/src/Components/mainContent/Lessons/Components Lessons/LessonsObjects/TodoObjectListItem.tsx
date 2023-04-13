import React, {FC} from 'react';
import style from './TodoObject.module.css'

type TodoProps = {
    title: string
    id: string
    completed: boolean
}

const TodoObjectListItem: FC<TodoProps> = ({completed, id, title}) => {
    return (
        <div className={style.Todo}>
                <input className={style.Input} type="checkbox"/>
                {title}
                <button className={style.Button}>delete</button>
        </div>
    );
};

export default TodoObjectListItem;