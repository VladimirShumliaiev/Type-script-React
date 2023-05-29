import React from 'react';
import {useAppSelector} from "../../../../../../hooks/hooks";
import UserItemExample from "./UserItemExample";

const UserListExample = () => {
    const userSelector = useAppSelector(state => state.users.userList)
    return (
        <div>
            {
                userSelector.map(user => <UserItemExample key={user.id} {...user}/>)
            }
        </div>
    );
};

export default UserListExample;