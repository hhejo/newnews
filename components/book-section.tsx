import { Book } from '@/type';
import BookSectionItem from './book-section-item';
import Link from 'next/link';

export default function BookSection({ books }: { books: Book[] }) {
  console.log('books:', books);
  return (
    <section className="flex flex-col gap-14 py-20">
      <h2 className="font-bold text-3xl text-center">🥳 새로 나온 책들</h2>
      <ul className="flex flex-wrap justify-center gap-8">
        {books.map((book) => (
          <Link key={book.itemId} href={`/books/${book.isbn13}`}>
            <BookSectionItem book={book} />
          </Link>
        ))}
      </ul>
    </section>
  );
}
