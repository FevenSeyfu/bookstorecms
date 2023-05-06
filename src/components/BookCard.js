const BookCard = (book) => {
  const {
    genre, title, author, chapter,
  } = book;
  return (
    <div className="bookCard">
      <h3 className="bookGenre">{genre}</h3>
      <h1 className="bookTitle">{title}</h1>
      <h2 className="bookAuthor">{author}</h2>
      <ul className="bookActions">
        <li className="action">Comments</li>
        <li className="action">Remove</li>
        <li className="action">Edit</li>
      </ul>
      <div className="progress">
        <p className="current">CURRENT CHAPTER</p>
        <h3 className="chapterNumb">{chapter}</h3>
        <button type="submit" className="updateProgresBtn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default BookCard;
