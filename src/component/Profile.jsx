import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

const Profile = () => {
    const { user } = useContext(UserContext);

    if(!user) return <div>Pleace login!!</div>

    return <h1>Welcome {user.userName}</h1>
}

export default Profile;
