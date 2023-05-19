import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/bookSlice';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    const Obj = {
      item_id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(Obj));

    setAuthor('');
    setTitle('');
  };
  return (
    <div>
      <form
        className="newBookForm"
      >
        <h2 className="title">ADD NEW BOOK</h2>
        <input
          type="text"
          className="inputBook"
          name="title"
          value={title}
          placeholder="Book title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="inputBook"
          name="author"
          value={author}
          placeholder="Book Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select className="Author" name="options">
          <option value="Author">Author</option>
        </select>
      </form>
      <button
        type="submit"
        onClick={handlesubmit}
      >
        ADD BOOK
      </button>
    </div>
  );
}

export default Form;
