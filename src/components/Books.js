import BookCard from './BookCard.js';
import Form from './AddNewBook.js';

function Books() {
  return (
    <section className="ListBooks">
      <BookCard />
      <Form />
    </section>
  );
}

export default Books;
