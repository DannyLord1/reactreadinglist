import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookInfo from './BookInfo';


const BookList = () => {
  const {books} = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => {
          return( <BookInfo book={book} key={book.id} />);
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">Hurry! Find More Books to Read!!!</div>
  )
}


 
export default BookList;