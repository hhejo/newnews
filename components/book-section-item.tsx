import { Book } from '@/type';

export default function BookSectionItem({ book }: { book: Book }) {
  return (
    <li className="rounded-xl border border-gray-100 overflow-hidden w-64 flex flex-col">
      <img
        className="max-w-64"
        src={book.cover}
        loading="lazy"
        alt="책 커버 이미지"
      />
      <div className="p-2 flex flex-col gap-4">
        <h3 className="font-bold text-lg text-gray-800">{book.title}</h3>
        <div className="text-sm text-gray-400">
          <span>{book.author}</span>
          <div className="w-px bg-gray-300"></div>
          <span>{book.publisher}</span>
          <div className="w-px bg-gray-300"></div>
          {/* <span className="align-middle">{book.pubDate}</span> */}
        </div>
        {/* <p>{book.description}</p> */}
      </div>
    </li>
  );
}
