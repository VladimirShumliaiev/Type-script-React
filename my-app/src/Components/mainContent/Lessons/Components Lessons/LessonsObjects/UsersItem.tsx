import React, {FC} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import {deleteUser} from "../../../../../redux/Slices/lessonsObjectSlice";

type UsersItemProps = {
    id: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        }
    }
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    }
}

const UsersItem: FC<UsersItemProps> = (props) => {
    const {
        id, username, website, phone, email,
        address: {street, suite, city, zipcode, geo: {lat, lng}}
        , company: {name, bs, catchPhrase}
    } = props
    const dispatch = useAppDispatch()

    const deleteHandler = () => {
        if (window.confirm(`Delete user ${username}`)) {
            dispatch(deleteUser(id))
        }
    }
    return (
        <li>
            <div>id: {id}</div>
            <div>name: {username}</div>
            <div>website: {website}</div>
            <div>
                address:
                <div>street: {street}</div>
                <div>suite: {suite}</div>
                <div>city: {city}</div>
                <div>zipcode: {zipcode}</div>
                   geo::
                   <div>{lng}</div>
                   <div>{lat}</div>
            </div>
            <div>phone: {phone}</div>
            <div>email: {email}</div>
            <div>
                company:
                <div>{name}</div>
                <div>{catchPhrase}</div>
                <div>{bs}</div>
            </div>
            <button onClick={deleteHandler}>delete user</button>
            <hr/>

        </li>
    );
};

export default UsersItem;