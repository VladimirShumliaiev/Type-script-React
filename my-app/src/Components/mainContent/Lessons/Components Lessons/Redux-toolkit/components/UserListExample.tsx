import React, {FC} from 'react';
import {useAppSelector} from "../../../../../../hooks/hooks";
import UserItemExample from "./UserItemExample";


const UserListExample: FC = () => {
    const userList = useAppSelector(state => state.userSlice.users)
    return (
        <div>
            {
                userList.map(e => <UserItemExample key={e.id} {...e}/>)
            }
        </div>
    );
};

export default UserListExample;