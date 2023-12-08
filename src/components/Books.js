import BookCard from './BookCard';
import Form from './AddNewBook';

function Books() {
  return (
    <section className="ListBooks">
      <BookCard />
      <Form />
    </section>
  );
}

export default Books;
