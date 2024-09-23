'use client';
import { useState, useEffect } from 'react';
import { Book } from '@/type';

export default function Page({ params }: { params: { isbn13: string } }) {
  const [book, setBook] = useState<Book>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const baseUrl = `http://127.0.0.1:3000/api/books`;
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
        <main className="container mx-auto py-20">
          {/* 책 정보 요약 */}
          <section className="flex flex-col gap-6">
            <div className="">
              <h2 className="font-bold text-4xl text-gray-700">{book.title}</h2>
            </div>

            <div className="flex gap-6">
              {/* 카드 이미지 */}
              <div className="relative overflow-hidden w-[56rem] h-[40rem] p-2 rounded-xl shadow-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center brightness-50 blur-sm"
                  style={{ backgroundImage: `url('${book.cover}')` }}
                ></div>
                <img
                  className="relative mx-auto h-full object-cover"
                  src={book.cover}
                  loading="lazy"
                  alt="책 커버 이미지"
                />
              </div>

              {/* 카드 내용 */}
              <div className="p-6 flex flex-col gap-8 w-full rounded-xl shadow-lg">
                <div className="flex flex-col gap-3 text-gray-700">
                  <div>
                    <div className="underline underline-offset-4 decoration-2 text-lg text-gray-400 w-12 mb-1">
                      저자
                    </div>
                    <div>{book.author}</div>
                  </div>
                  <div>
                    <div className="underline underline-offset-4 decoration-2 text-lg text-gray-400 w-16 mb-1">
                      설명
                    </div>
                    <div>{book.description || '설명이 없습니다.'}</div>
                  </div>
                  <div>
                    <div className="underline underline-offset-4 decoration-2 text-lg text-gray-400 w-16 mb-1">
                      출판사
                    </div>
                    <div>{book.publisher}</div>
                  </div>
                  <div>
                    <div className="underline underline-offset-4 decoration-2 text-lg text-gray-400 w-16 mb-1">
                      날짜
                    </div>
                    <div>{book.pubDate}</div>
                  </div>
                  <div>
                    <div className="underline underline-offset-4 decoration-2 text-lg text-gray-400 w-16 mb-1">
                      쪽 수
                    </div>
                    <div>1234567890</div>
                  </div>
                  <div>
                    <div className="underline underline-offset-4 decoration-2 text-lg text-gray-400 w-16 mb-1">
                      가격
                    </div>
                    <div>
                      <span className="line-through">{book.priceStandard}</span>{' '}
                      <span>{book.priceSales}</span>
                    </div>
                  </div>
                  <div>
                    <div className="underline underline-offset-4 decoration-2 text-lg text-gray-400 w-16 mb-1">
                      재고
                    </div>
                    <div>{book.stockStatus || '재고 확인'}</div>
                  </div>
                </div>
                <div>
                  <button>장바구니</button>
                  <button>결제</button>
                  <button>찜</button>
                  <button>읽었어요</button>
                </div>
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
