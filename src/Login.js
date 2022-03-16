import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({setToken}) => {
    const [username, setUsername] = useState('');
    async function handleClick() {
        let x = await fetch('https://jsonplaceholder.typicode.com/users');
        let res = await x.json();
        
        let y = res.filter((item) => item.username.toUpperCase() === username.toUpperCase());

        if ( y.length > 1 ){
            alert('OK!');
        }
        else{
            alert('Gagal Login')
        }
        
    }
    return (
    <div className="login-wrapper">
        <h1>Please Log In</h1>
        <label>
            <p>Username</p>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
            <p>Password</p>
            <input type="password" />
            </label>
            <div>
            <Link to='/dashboard' onClick={handleClick}>Submit</Link>
            </div>
    </div>
    );
};

export default Login;