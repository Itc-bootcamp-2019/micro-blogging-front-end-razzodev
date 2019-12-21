import React, { useState, useContext } from 'react';
import { UserNameContext } from '../context'

function Profile() {
    const { name , setName } = useContext(UserNameContext);
    const submitName = () => {
        console.log(name);
    }
    return (
        <div>
            <h3 style={{ color: '#FFFFFF' }}>{name}</h3>
                <input placeholder='username' onChange={(e) =>
                    setName(e.target.value)} />
                <button onClick={() => submitName()}>Confirm</button>
        </div>
    )
}

export default Profile
