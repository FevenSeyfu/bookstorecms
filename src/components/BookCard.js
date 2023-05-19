import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, getBooks } from '../redux/books/bookSlice';

const BookCard = () => {
  const { books, isLoading, isError } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: try again</div>;
  }

  return (
    books.map((book) => (
      <div key={book.item_id} className="bookCard">
        <h3 className="bookGenre">{book.category}</h3>
        <h1 className="bookTitle">{book.title}</h1>
        <h2 className="bookAuthor">{book.author}</h2>
        <ul className="bookActions">
          <li className="action">Comments</li>
          <button
            type="button"
            className="action"
            onClick={() => {
              dispatch(removeBook(book.item_id));
            }}
          >
            Remove
          </button>
          <li className="action">Edit</li>
        </ul>
        <div className="progress">
          <p className="current">CURRENT CHAPTER</p>
          <h3 className="chapterNumb">chapter</h3>
          <button type="submit" className="updateProgresBtn">UPDATE PROGRESS</button>
        </div>
      </div>
    )));
};

export default BookCard;
