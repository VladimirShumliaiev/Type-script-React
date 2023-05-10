import React, {FC} from 'react';
import {useAppDispatch} from "../../../../../../hooks/hooks";
import {deleteUserExample} from "../../../../../../redux/Slices/userSlice";

type UserItemPops = {
    id: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            ing: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

const UserItemExample: FC<UserItemPops> = ({
                                               id,
                                               username,
                                               company,
                                               address,
                                               website,
                                               phone,
                                               email
                                           }) => {
    const dispatch = useAppDispatch()

    const buttonDeleteHandler = () => {
        if (window.confirm(`delete user ${username}`))
            dispatch(deleteUserExample(id))
    }

    return (
        <div>
            <h3>user: {id}</h3>
            <div>
                id: {id}
            </div>
            <div>
                username: {username}
            </div>
            <div>
                email: {email}
            </div>
            <div>
                address:
                <div>
                    street: {address.street}
                </div>
                <div>
                    suite: {address.suite}
                </div>
                <div>
                    city: {address.city}
                </div>
                <div>
                    zipcode: {address.zipcode}
                </div>
                <div>
                    geo:
                    <div>
                        lat: {address.geo.lat}
                    </div>
                    <div>
                        ing: {address.geo.ing}
                    </div>
                </div>
            </div>
            <div>
                phone: {phone}
            </div>
            <div>
                website: {website}
            </div>
            <div>
                company:
                <div>
                    name: {company.name}
                </div>
                <div>
                    catchPhrase: {company.catchPhrase}
                </div>
                <div>
                    bs: {company.bs}
                </div>
            </div>
            <button onClick={buttonDeleteHandler}>delete</button>
            <hr/>
        </div>
    );
};

export default UserItemExample;