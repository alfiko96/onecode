import React, { useState } from 'react';
import ProfileButton from './ProfileButton';

const Profile = (id) => {
    const [ items, setItems ] = useState([])
    async function handleClick (){
        let x = await fetch('https://jsonplaceholder.typicode.com/users/%'+id);
        let res = await x.json();
        setItems(res);
    }
    return (
        <div>
            <ProfileButton/>
            <button onClick={handleClick}>Tampilkan</button>
            {items && items.map((item) => (
            <div>
                <h3>User name: {item.username}</h3>
                <h3>Email: {item.email}</h3>
                <h3>Address: {item.username}</h3>
                <h3>Phone number: {item.phone}</h3>
            </div>
            ))}
        </div>
    );
};

export default Profile;