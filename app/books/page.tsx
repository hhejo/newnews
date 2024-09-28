'use client';
import { useState, useEffect } from 'react';
import BookSection from '@/components/book-section';
import { Book } from '@/type';

export default function Page() {
  const [booksBest, setBooksBest] = useState<Book[]>([]);
  const [booksSpecial, setBooksSpecial] = useState<Book[]>([]);
  const [booksNew, setBooksNew] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const baseUrl = 'http://127.0.0.1:3000/api/books';
    const searchParamsBest = new URLSearchParams([
      ['queryType', 'Bestseller'],
      ['cover', 'Big'],
      ['maxResults', '10'],
    ]);
    const searchParamsSpecial = new URLSearchParams([
      ['queryType', 'ItemNewSpecial'],
      ['cover', 'Big'],
      ['maxResults', '10'],
    ]);
    const searchParamsNew = new URLSearchParams([
      ['queryType', 'ItemNewAll'],
      ['cover', 'Big'],
      ['maxResults', '10'],
    ]);
    const urlBest = `${baseUrl}?${searchParamsBest}`;
    const urlSpecial = `${baseUrl}?${searchParamsSpecial}`;
    const urlNew = `${baseUrl}?${searchParamsNew}`;
    // fetch books
    async function fetchBooks() {
      const responses = await Promise.allSettled([
        fetch(urlBest, { method: 'GET' }),
        fetch(urlSpecial, { method: 'GET' }),
        fetch(urlNew, { method: 'GET' }),
      ]);
      for (const response of responses) {
        if (response.status === 'fulfilled') {
          const books = await response.value.json();
          if (response.value.url.includes('Best')) setBooksBest(books);
          else if (response.value.url.includes('Special'))
            setBooksSpecial(books);
          else setBooksNew(books);
        } else {
          console.error('Request failed:', response.reason);
        }
      }
    }
    fetchBooks();
    setIsLoading(false);
  }, []);

  return (
    <main className="container mx-auto">
      {isLoading ? (
        <>로딩중..</>
      ) : (
        <>
          <BookSection sectionName={'🥰 인기 많은 책들'} books={booksBest} />
          <BookSection sectionName={'🧐 주목할 새 책들'} books={booksSpecial} />
          <BookSection sectionName={'🥳 새로 나온 책들'} books={booksNew} />
        </>
      )}
    </main>
  );
}
