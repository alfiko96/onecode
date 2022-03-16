import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProfileButton from './ProfileButton';

const Detail = ({id,setPath}) => {
    const [items, setItems] = useState([]);
    const [comms, setComms] = useState([]);
    const [show, setShow] = useState(false);
    async function handleClick (){
        let x = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
        let res = await x.json();
        let temp = [];

        let y = await fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments');
        let resy = await y.json(); 
        temp.push({...res, comments: resy.length})
        setComms(resy);
        setItems(temp);
    }
    return (
        <div>
            <ProfileButton/>
            <button onClick={handleClick}>Tampilkan</button>
            {items && items.map((item) => (
            <div>
                <h3>Item #{item.id}</h3>
                <h3>Item #{item.body}</h3>
            </div>
            ))}
            <button onClick={() => setShow(!show)}>Tampilkan Comments</button>
            {show ? 
            comms.map((item) => (
                <div>
                    <h3>Item #{item.id}</h3>
                    <h3>Item #{item.body}</h3>
                </div>)):
            comms.length}
        </div>
    );
};

export default Detail;