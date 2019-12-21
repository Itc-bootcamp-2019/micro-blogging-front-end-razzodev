import React, { useState, useContext } from 'react';
import { UserNameContext } from '../context'

function Profile() {
    const { userName , setUsername } = useContext(UserNameContext);

    return (
        <div>
            <h3 style={{ color: '#FFFFFF' }}>Profile</h3>
                <input placeholder='username' onChange={(e) =>
                    setUsername(e.target.value)} />
        </div>
    )
}

export default Profile
