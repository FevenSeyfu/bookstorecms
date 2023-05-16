import { removeBook } from '../redux/books/bookSlice';
import PropTypes from 'prop-types';

const BookCard = ({ id, genre, title, author, }) => {
	const dispatch = useDispatch();
  return (
    <div className="bookCard">
      <h3 className="bookGenre">{genre}</h3>
      <h1 className="bookTitle">{title}</h1>
      <h2 className="bookAuthor">{author}</h2>
      <ul className="bookActions">
        <li className="action">Comments</li>
        <button
          type="button"
          className="action"
          onClick={() => {
				    dispatch(removeBook(id));
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
  );
};

export default BookCard;
