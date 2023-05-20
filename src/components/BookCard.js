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
        <div>
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
            <li className="action last">Edit</li>
          </ul>
        </div>
        <div className="progress-chart">
          <div className="progress-bar"> </div>
          <div className="progress-percentage">
            <p className="percent">64%</p>
            <p className="complete">completed</p>
          </div>
        </div>
        <div className="progress">
          <h3 className="current">CURRENT CHAPTER</h3>
          <p className="chapterNumb">Chapter 17</p>
          <button type="submit" className="updateProgresBtn">UPDATE PROGRESS</button>
        </div>
      </div>
    )));
};

export default BookCard;
