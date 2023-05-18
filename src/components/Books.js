import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import Form from './AddNewBook';

function Books() {
  const { booksList } = useSelector((state) => state.book);
  return (
    <section className="ListBooks">
      {booksList.map((book) => (
        <BookCard
          key={book.item_id}
          id={book.item_id}
          category={book.category}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </section>
  );
}

export default Books;
