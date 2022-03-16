import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import ProfileButton from './ProfileButton';

const Dashboard = ({setPath,setID}) => {
    const [items, setItems] = useState([]);
    async function handleClick (){
        let x = await fetch('https://jsonplaceholder.typicode.com/users');
        let res = await x.json();
        let temp = [];

        for(let i=0; i<res.length; i++){
           let y = await fetch('https://jsonplaceholder.typicode.com/posts/'+res[i].id+'/comments');
           let resy = await y.json(); 
           temp.push({...res[i], comments: resy.length})
        }

        setItems(temp);
    }

    
    const itemsPerPage = 10;
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };


    return (
        <div>
            <ProfileButton/>
            <button onClick={handleClick}>Tampilkan</button>
            {items && items.map((item) => (
            <div>
                <h3>Item #{item.id}</h3>
                <Link onClick={setID(item.id)} to='/detail'>Detail</Link>
            </div>
            ))}
             <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Dashboard;