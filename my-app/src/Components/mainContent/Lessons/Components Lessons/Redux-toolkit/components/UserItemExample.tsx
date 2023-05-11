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

const UserItemExample: FC<UserItemPops> = (props) => {
    const {
        id, username, company: {name, catchPhrase, bs},
        address: {
            street, zipcode, city, suite,
            geo: {lat, ing}
        }, website, phone, email
    } = props

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
                    street: {street}
                </div>
                <div>
                    suite: {suite}
                </div>
                <div>
                    city: {city}
                </div>
                <div>
                    zipcode: {zipcode}
                </div>
                <div>
                    geo:
                    <div>
                        lat: {lat}
                    </div>
                    <div>
                        ing: {ing}
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
                    name: {name}
                </div>
                <div>
                    catchPhrase: {catchPhrase}
                </div>
                <div>
                    bs: {bs}
                </div>
            </div>
            <button onClick={buttonDeleteHandler}>delete</button>
            <hr/>
        </div>
    );
};

export default UserItemExample;