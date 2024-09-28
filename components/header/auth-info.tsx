import Link from 'next/link';

export default function AuthInfo() {
  return (
    <nav className="flex gap-3 text-gray-700">
      <Link className="hover:underline" href="/signup">
        회원가입
      </Link>
      <Link className="hover:underline" href="/login">
        로그인
      </Link>
    </nav>
  );
}
