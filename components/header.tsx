'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [searchType, setSearchType] = useState('keyword');
  const [searchContent, setSearchContent] = useState('keyword');
  const router = useRouter();

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSearchType(e.target.value);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchContent(e.target.value);

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(
      `/search?searchType=${searchType}&searchContent=${searchContent}`
    );
    // const baseUrl = 'https://newnews-server-0088d7d122f8.herokuapp.com/api/search';
    return;
    const baseUrl = 'http://127.0.0.1:3000/api/search';
    const params = new URLSearchParams([
      ['queryType', searchType],
      ['query', searchContent],
      ['maxResults', '10'],
      ['cover', 'Big'],
    ]);
    const url = `${baseUrl}?${params}`;
    console.log(url);
    // search book
    async function searchBook() {
      const response = await fetch(url, { method: 'GET' });
      const data = await response.json();
      console.log(data);
      console.log(data.item);
    }
    searchBook();
  };

  return (
    <header className="flex-initial flex justify-between items-center container mx-auto h-20 border-b border-gray-200">
      {/* Logo */}
      <Link className="text-xl font-bold" href="/">
        Newnews
      </Link>
      {/* Searchbar */}
      <form
        className="flex items-center w-80 h-12 rounded-full border border-gray-200 overflow-hidden"
        onSubmit={submitHandler}
      >
        <div className="">
          <select onChange={selectHandler}>
            <option value="keyword">제목+저자</option>
            <option value="title">제목</option>
            <option value="author">저자</option>
            <option value="publisher">출판사</option>
          </select>
        </div>
        <input className="w-full h-full" type="text" onChange={inputHandler} />
        <button className="" type="submit">
          🔎
        </button>
      </form>
      {/* Nav */}
      <nav className="flex gap-4">
        <Link href="/signup">회원가입</Link>
        <Link href="/login">로그인</Link>
      </nav>
    </header>
  );
}
