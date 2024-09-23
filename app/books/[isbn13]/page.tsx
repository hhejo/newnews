'use client';
import { useState, useEffect } from 'react';
import { Book } from '@/type';

export default function Page({ params }: { params: { isbn13: string } }) {
  console.log(params);
  const [book, setBook] = useState<Book>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const baseUrl = `http://127.0.0.1:3000/api/book`;
    const url = `${baseUrl}/${params.isbn13}`;
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
  }, [params.isbn13]);

  return (
    <>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <main className="container mx-auto">
          <section className="rounded-xl border border-gray-100 overflow-hidden shadow-lg flex">
            {/* 카드 이미지 */}
            <div className="relative overflow-hidden w-96">
              <div
                className="absolute inset-0 bg-cover bg-center brightness-50 blur-sm"
                style={{ backgroundImage: `url('${book.cover}')` }}
              ></div>
              <img
                className="relative mx-auto max-w-64 object-cover"
                src={book.cover}
                loading="lazy"
                alt="책 커버 이미지"
              />
            </div>

            {/* 카드 내용 */}
            <div className="p-2 flex flex-col gap-4 w-full">
              <h3 className="font-bold text-lg text-gray-800">{book.title}</h3>
              <div className="text-sm text-gray-400 text-end">
                <span>{book.author}</span>
                <div className="w-px bg-gray-300"></div>
                <span>{book.publisher}</span>
                <div className="w-px bg-gray-300"></div>
              </div>
            </div>
          </section>
          <section>책 내용 상세</section>
          <section>독자 리뷰</section>
          <section>명언</section>
        </main>
      )}
    </>
  );
}
