'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [searchType, setSearchType] = useState('keyword'); // 검색 종류
  const [searchContent, setSearchContent] = useState(''); // 검색어
  const router = useRouter();

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSearchType(e.target.value);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchContent(e.target.value);

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchUrl = `/search?searchType=${searchType}&searchContent=${searchContent}`;
    router.push(searchUrl);
    return;
  };

  return (
    <form
      className="flex items-center w-[428px] h-12 rounded-full border border-gray-200 overflow-hidden px-3 py-2"
      onSubmit={submitHandler}
    >
      <div className="pr-2 border-r text-sm text-gray-700">
        <select onChange={selectHandler}>
          <option value="keyword">제목+저자</option>
          <option value="title">제목</option>
          <option value="author">저자</option>
          <option value="publisher">출판사</option>
        </select>
      </div>
      <input
        className="w-full h-full mr-1"
        type="text"
        onChange={inputHandler}
      />
      <button className="text-xl p-2" type="submit">
        🔎
      </button>
    </form>
  );
}
