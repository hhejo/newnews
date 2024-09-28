import Link from 'next/link';

export default function Links() {
  return (
    <div className="flex gap-3 text-gray-700">
      <Link className="hover:underline" href="/books/new">
        신간
      </Link>
      <Link className="hover:underline" href="/books/bestseller">
        베스트셀러
      </Link>
      <Link className="hover:underline" href="/community">
        커뮤니티
      </Link>
    </div>
  );
}
