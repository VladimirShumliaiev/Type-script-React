import React, {FC} from 'react';
import {useAppSelector} from "../../../../../../hooks/hooks";
import UserItem from "./UserItem";

const UserList: FC = () => {
    const userList = useAppSelector(state => state.userSlice.users)
    return (
        <div>
            {
                userList.map(e => <UserItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default UserList;