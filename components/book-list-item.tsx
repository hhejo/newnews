import { Book } from '@/type';

export default function BookListItem({ book }: { book: Book }) {
  return (
    <li className="rounded-xl border border-gray-100 overflow-hidden">
      <div className="flex">
        {/* <div className="w-48 h-48 bg-gray-100">썸네일2</div> */}
        <div
          className="bg-cover bg-center w-48 h-64"
          style={{ backgroundImage: `url(${book.cover})` }}
        ></div>
        {/* <img
          className="max-w-64 max-h-64"
          src={book.cover}
          alt="책 커버 이미지"
        /> */}
        <div className="p-2">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold">{book.title}</h3>
            <span className="align-middle">{book.pubDate}</span>
          </div>
          <div className="flex justify-end gap-2">
            <span>{book.author}</span>
            <div className="w-px bg-gray-300"></div>
            <span>{book.publisher}</span>
          </div>
          {/* <p>{book.description}</p> */}
        </div>
      </div>
    </li>
  );
}
