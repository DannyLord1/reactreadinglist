import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext'

const Navbar = () => {
    const {books} = useContext(BookContext);
    return(
        <div className="navbar">
            <h1>Recommended Reading</h1>
            <p>You currently have {books.length} books left to read...</p>
        </div>
    );
}
 
export default Navbar;