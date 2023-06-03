import React, {FC, useEffect, useState} from 'react';

type Comments = {
    userId: string
    id: string
    name: string
    body: string
}

const UseEffectLessons: FC = () => {
    const [value, setValue] = useState<Comments[]>([{id: '150', body: '155', name: 'asdasd', userId: '12323'}])
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/?_limit=5')
            .then(res => res.json())
            .then(date => setValue(date))
    }, [])

    useEffect(() => {
        alert(`checked: ${checked.toString()}`)
    }, [])

    useEffect(() => {
        console.log(checked ? 'Yes, checked' : 'No, not checked')
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
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(checked => !checked)}
                />
                {checked ? 'checked' : 'not checked'}
            </div>
        </div>
    );

};

export default UseEffectLessons;