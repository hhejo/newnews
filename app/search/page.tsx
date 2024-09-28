'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SearchItem from '@/components/search-item';
import { Book } from '@/type';

export default function Page({
  searchParams,
}: {
  searchParams: { searchType: string; searchContent: string };
}) {
  const { searchType, searchContent } = searchParams;
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // const baseUrl = 'https://newnews-server-0088d7d122f8.herokuapp.com/api/search';
    const baseUrl = 'http://127.0.0.1:3000/api/search';
    const params = new URLSearchParams([
      ['queryType', searchType],
      ['query', searchContent],
      ['maxResults', '10'],
      ['cover', 'Big'],
    ]);
    const url = `${baseUrl}?${params}`;
    // search books
    async function fetchBooks() {
      const response = await fetch(url, { method: 'GET' });
      const books = await response.json();
      setBooks(books);
      console.log('from search', books);
    }
    fetchBooks();
    setIsLoading(false);
  }, [searchType, searchContent]);

  return (
    <main className="container mx-auto">
      {isLoading ? (
        <>로딩중..</>
      ) : (
        <>
          <section className="flex flex-col gap-14 py-20">
            <h2 className="font-bold text-3xl text-center">
              <span className="text-sky-500">{searchContent}</span>의 검색 결과
            </h2>
            <ul className="flex flex-col justify-center gap-6">
              {books.map((book) => (
                <Link key={book.itemId} href={`/books/${book.isbn13}`}>
                  <SearchItem book={book} />
                </Link>
              ))}
            </ul>
          </section>
        </>
      )}
    </main>
  );
}
