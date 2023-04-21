import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import UsersList from "./UsersList";
import {fetchUsers} from "../../../../../redux/Slices/lessonsObjectSlice";
import style from './Users.module.css'



const Users = () => {
    const [users, setUsers] = useState('')
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    },[])


    return (
        <div className={style.Users}>
           <UsersList users={users} setUsers={setUsers}/>
        </div>
    );
};

export default Users;