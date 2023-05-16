import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import Form from './AddNewBook';

function Books() {
  const { books } = useSelector((state) => state.books);
  return (
    <section className="ListBooks">
      {books.map((book) => (
        <BookCard
          key={book.id}
          genre={book.category}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </section>
  );
}

export default Books;
