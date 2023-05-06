function Form() {
  return (
    <div>
      <form className="newBookForm">
        <h2 className="title">ADD NEW BOOK</h2>
        <input type="text" className="inputBook" placeholder="Book title" />
        <select className="Author" name="options">
          <option value="Author">Author</option>
        </select>
      </form>
      <button type="submit">ADD BOOK</button>
    </div>
  );
}

export default Form;
