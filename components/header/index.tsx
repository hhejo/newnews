import Logo from './logo';
import Links from './links';
import SearchBar from './search-bar';
import AuthInfo from './auth-info';

export default function Header() {
  return (
    <header className="flex-initial flex justify-between items-center container mx-auto h-20 border-b border-gray-200">
      <Logo />
      <nav className="flex justify-between items-center gap-6">
        <Links />
        <SearchBar />
        <AuthInfo />
      </nav>
    </header>
  );
}
