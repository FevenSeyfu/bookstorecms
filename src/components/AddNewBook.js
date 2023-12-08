import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/bookSlice';

const bookTemplate = {
  item_id: '',
  title: '',
  author: '',
  category: '',
};
function Form() {
  const [values, setValue] = useState({ bookTemplate });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setValue((values) => ({
      ...values,
      item_id: crypto.randomUUID(),
      [name]: value,
      category: 'Action',
    }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(values));
    setValue({});
  };
  return (
    <div>
      <form
        className="newBookForm"
      >
        <h2 className="title">ADD NEW BOOK</h2>
        <div className="input">
          <input
            type="text"
            className="inputBook"
            name="title"
            value={values.title || ''}
            placeholder="Book title"
            onChange={handleChange}
          />
          <input
            type="text"
            className="inputBook"
            name="author"
            value={values.author || ''}
            placeholder="Book Author"
            onChange={handleChange}
          />
          <select name="Catagories" id="Catagories" className="drop-down">
            <option value="actipn">Catagories</option>
          </select>
          <button
            type="submit"
            onClick={handlesubmit}
            className="AddBook"
          >
            ADD BOOK
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
