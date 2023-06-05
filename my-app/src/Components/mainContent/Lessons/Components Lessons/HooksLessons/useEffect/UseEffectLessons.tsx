import React, {FC, useEffect, useState} from 'react';
import axios from "axios";

type Comments = {
    userId: string
    id: string
    name: string
    body: string
}

const UseEffectLessons: FC = () => {
    const [value, setValue] = useState<Comments[]>([])
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments/?_limit=5')
            .then(res => setValue(res.data))
    }, [])

    useEffect(() => {
        console.log(checked ? 'yes checked': 'no checked')
    },[checked])

    useEffect(() => {
        alert(`checked ${checked.toString()}`)
    },[])

    return (
        <div>
            {value.map(e => (
                <div key={e.id}>
                    <div> id: {e.id}</div>
                    <div> userId: {e.userId}</div>
                    <div>name: {e.name}</div>
                    <div>body: {e.body}</div>
                    <hr/>
                </div>
            ))}

            <div>
                <input type="checkbox"
                       checked={checked}
                       onChange={() => setChecked(checked => !checked)}
                />
                {checked ? 'yes, checked': 'no, checked'}
            </div>
        </div>
    );

};

export default UseEffectLessons;