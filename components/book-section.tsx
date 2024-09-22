import { Book } from '@/type';
import BookSectionItem from './book-section-item';

export default function BookSection({ books }: { books: Book[] }) {
  return (
    <section className="flex flex-col gap-14 py-20">
      <h2 className="font-bold text-3xl text-center">🥳 새로 나온 책들</h2>
      <ul className="flex flex-wrap justify-center gap-8">
        {books.map((book) => (
          <BookSectionItem key={book.isbn13} book={book} />
        ))}
      </ul>
    </section>
  );
}
