import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../../hooks/hooks";
import {fetchUsersExample} from "../../../../../redux/Slices/userSlice";
import UserListExample from "./components/UserListExample";


const ReduxToolkitExample: FC = () => {
    const dispatch = useAppDispatch()
    const {error, pending} = useAppSelector(state => state.users)

    useEffect(() => {
        dispatch(fetchUsersExample())
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