import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import UsersList from "./UsersList";
import {fetchUsers} from "../../../../../redux/Slices/lessonsObjectSlice";
import style from './Users.module.css'



const Users = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    },[])


    return (
        <div className={style.Users}>
           <UsersList/>
        </div>
    );
};

export default Users;