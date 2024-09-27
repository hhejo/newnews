import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      className="text-xl font-bold text-gray-800 hover:text-gray-500 transition"
      href="/"
    >
      Newnews
    </Link>
  );
}
