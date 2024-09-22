import { Book } from '@/type';
import BookListItem from './book-list-item';

export default function BookList({ books }: { books: Book[] }) {
  return (
    <section className="flex flex-col gap-2 p-8 rounded-xl shadow-xl">
      <h2 className="text-end">책 1번 섹션</h2>
      <ul className="flex flex-col">
        {books.map((book) => (
          <BookListItem key={book.isbn13} book={book} />
        ))}
      </ul>
    </section>
  );
}
