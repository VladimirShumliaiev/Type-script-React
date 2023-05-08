import React, {FC, useEffect} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import {fetchUsersExample} from "../../../../../redux/Slices/userSlice";
import UserListExample from "./components/UserListExample";


const ReduxToolkitExample: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsersExample())
    },[])
    return (
        <div>
            <UserListExample/>
        </div>
    );
};

export default ReduxToolkitExample;