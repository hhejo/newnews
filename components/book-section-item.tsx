import { Book } from '@/type';

export default function BookSectionItem({ book }: { book: Book }) {
  return (
    // 책 카드
    <li className="rounded-xl border border-gray-100 overflow-hidden w-64 shadow-lg">
      {/* 카드 이미지 */}
      <div className="relative overflow-hidden p-1">
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
      <div className="p-2 flex flex-col justify-between gap-4 h-28">
        <h3 className="font-bold text-sm text-gray-700">{book.title}</h3>
        <div className="flex flex-col text-xs text-gray-400 text-end">
          <span>{book.author}</span>
          {/* <span>{book.publisher}</span> */}
        </div>
      </div>
    </li>
  );
}
