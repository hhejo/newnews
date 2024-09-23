'use client';
import { useState, useEffect } from 'react';

export default function Page({ params }: { params: { isbn: string } }) {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const baseUrl = `http://127.0.0.1:3000/api/book`;
    const url = `${baseUrl}/${params.isbn}`;
    console.log(url);
    // fetch book
    async function fetchBook() {
      const response = await fetch(url, { method: 'GET' });
      const data = await response.json();
      setBook(data.item[0]);
      setIsLoading(false);
      console.log(data.item[0]);
    }
    fetchBook();
  }, [params.isbn]);

  return <main className="container mx-auto"></main>;
}
