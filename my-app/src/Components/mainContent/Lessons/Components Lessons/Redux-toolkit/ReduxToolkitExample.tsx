import React, {FC, useEffect} from 'react';
import UserList from "./components/UserList";
import {useAppDispatch} from "../../../../../hooks/hooks";
import {fetchUsers} from "../../../../../redux/Slices/userSlice";


const ReduxToolkitExample: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    },[])
    return (
        <div>
            <UserList/>
        </div>
    );
};

export default ReduxToolkitExample;