import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex-initial flex justify-between items-center container mx-auto h-20 border-b border-gray-200">
      {/* Logo */}
      <div>Newnews</div>
      {/* Searchbar */}
      <form className="flex items-center w-80 h-12 rounded-full border border-gray-200 overflow-hidden">
        <div className="">
          <select>
            <option>통합검색</option>
            <option>제목</option>
            <option>저자</option>
            <option>출판사</option>
          </select>
        </div>
        <input className="w-full h-full" type="text" />
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
