import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, getBooksList } from '../redux/books/bookSlice';

const BookCard = ({
  id, category, title, author,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="bookCard">
      <h3 className="bookGenre">{category}</h3>
      <h1 className="bookTitle">{title}</h1>
      <h2 className="bookAuthor">{author}</h2>
      <ul className="bookActions">
        <li className="action">Comments</li>
        <button
          type="button"
          className="action"
          onClick={() => {
            dispatch(removeBook(id)).then(() => dispatch(getBooksList));
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
BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookCard;
