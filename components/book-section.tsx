import { Book } from '@/type';
import BookSectionItem from './book-section-item';

export default function BookSection({ books }: { books: Book[] }) {
  return (
    <section className="flex flex-col gap-2 p-8 rounded-xl shadow-xl">
      <h2 className="text-end">1번 섹션</h2>
      <ul className="flex flex-wrap justify-center gap-8">
        {books.map((book) => (
          <BookSectionItem key={book.isbn13} book={book} />
        ))}
      </ul>
    </section>
  );
}
