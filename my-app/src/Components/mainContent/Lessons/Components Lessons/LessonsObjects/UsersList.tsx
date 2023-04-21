import React, {FC} from 'react';
import {useAppSelector} from "../../../../../hooks/hooks";
import UsersItem from "./UsersItem";

type UserListProps = {
    users: string,
    setUsers: (str: string) => void,
}

const UsersList: FC<UserListProps> = () => {
    const list = useAppSelector(state => state.usersObject.users)
    return (
        <ol>
            {
                list.map(e => <UsersItem key={e.id} {...e}/>)
            }
        </ol>
    );
};

export default UsersList;