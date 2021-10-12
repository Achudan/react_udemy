import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './../navbar.styles.scss'
import JSONPretty from 'react-json-pretty';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (

        isAuthenticated && (
            <div className='profile'>
                <img className='profile-user-img' src={user.picture} alt={user.name} />
                <span className='profile-family-name'>{user.family_name}</span>
                {/* <p className='profile-user-email'>{user.email}</p> */}
                {/* <JSONPretty data={user} /> */}
            </div>
        )
    )
}

export default Profile