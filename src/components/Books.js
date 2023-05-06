import BookCard from './BookCard';
import Form from './AddNewBook';

const bookList = [
  {
    id: '1',
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    chapter: 'Chapter 17',
  },
  {
    id: '2',
    genre: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    chapter: 'Chapter 3:"A Lesson Learned"',
  },
  {
    id: '3',
    genre: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    chapter: 'Introduction',
  },
];

function Books() {
  return (
    <section className="ListBooks">
      {bookList.map((book) => (
        <BookCard
          key={book.id}
          genre={book.genre}
          title={book.title}
          author={book.author}
          chapter={book.chapter}
        />
      ))}
      <Form />
    </section>
  );
}

export default Books;
