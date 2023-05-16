import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">
        <h1 className="text-3xl font-light">My Blog</h1>
      </Link>

      <nav className="flex gap-4">
        <Link href="/">홈</Link>
        <Link href="/posts">게시물</Link>
        <Link href="/about">소개</Link>
        <Link href="/contact">문의</Link>
      </nav>
    </header>
  );
};

export default Header;
