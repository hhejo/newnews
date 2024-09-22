'use client';
import { useState, useEffect } from 'react';
import BookSection from '@/components/book-section';

export default function Page() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const baseUrl = 'http://127.0.0.1:3000/api/books';
    const url = `${baseUrl}/new`;
    // fetch books
    async function fetchBooks() {
      const response = await fetch(url, { method: 'GET' });
      const data = await response.json();
      setBooks(data.item);
      setIsLoading(false);
      console.log(data.item);
    }
    fetchBooks();
  }, []);

  return (
    <main className="container mx-auto">
      {isLoading ? (
        <>로딩중..</>
      ) : (
        <>
          <BookSection books={books} />
          {/* <NewsSection newsArr={newsArr.slice(0, 4)} />
          <NewsSection newsArr={newsArr.slice(4, 8)} />
          <NewsSection newsArr={newsArr.slice(8, 12)} />
          <NewsSection newsArr={newsArr.slice(12, 16)} /> */}
        </>
      )}
    </main>
  );
}
