import React, {FC} from 'react';
import Users from "../../../../../../types/typeUsers";
import {useAppDispatch} from "../../../../../../hooks/hooks";
import {removeUser} from "../../../../../../redux/Slices/userSlice";

type UserItemExampleProps = Users

const UserItemExample: FC<UserItemExampleProps> = (props) => {
    const {company: {name, catchPhrase, bs}, email, id, userName, website, phone, address: {street, suite, city, geo: {lat, lng}}} = props
    const dispatch = useAppDispatch()
    const onclickHandle = () => {
        dispatch(removeUser(id))
    }
    return (
        <>
            <div>
                user Id: {id}
            </div>
            <div>
                user Name: {userName}
            </div>
            <div>
                user email: {email}
            </div>
            <div>
                <div>
                    user address:
                </div>
                street: {street},
                suite: {suite},
                city: {city},
                  geo:
                lat:{lat},
                lng:{lng},
            </div>
            <div>
               user phone: {phone}
            </div>
            <div>
                website: {website}
            </div>
            <div>
                <div>
                    company:
                </div>
                company name: {name},
                catchPhrase: {catchPhrase},
                bs: {bs}
            </div>
            <button onClick={onclickHandle}>Delete user</button>
        <hr/>
        </>
    );
};

export default UserItemExample;