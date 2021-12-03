import React, {createContext, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "The Way of Kings" , author: "Brian Sanderson" , id: 1},
        {title: "Name of the Wind" , author: "Patrick Rothfuss" , id: 2},
        {title: "Unsouled" , author: "Will Wight" , id: 3}
    ]);
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuidv4()}])
    };
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    };
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;