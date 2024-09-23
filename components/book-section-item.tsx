import { Book } from '@/type';

export default function BookSectionItem({ book }: { book: Book }) {
  return (
    // 책 카드
    <li className="rounded-xl border border-gray-100 overflow-hidden w-64 shadow-lg">
      {/* 카드 이미지 */}
      <div className="relative overflow-hidden">
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
      <div className="p-2 flex flex-col gap-4">
        <h3 className="font-bold text-lg text-gray-800">{book.title}</h3>
        <div className="flex flex-col text-sm text-gray-400 text-end">
          <span>{book.author}</span>
          <span>{book.publisher}</span>
        </div>
      </div>
    </li>
  );
}
