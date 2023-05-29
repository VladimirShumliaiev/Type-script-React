import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../../hooks/hooks";
import {fetchUsers} from "../../../../../redux/Slices/userSlice";
import UserListExample from "./components/UserListExample";

const ReduxToolkitExample = () => {
    const dispatch = useAppDispatch()
    const {error, pending} = useAppSelector(state => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    },[])
    return (
        <div>
            {pending && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <UserListExample/>
        </div>
    );
};

export default ReduxToolkitExample;