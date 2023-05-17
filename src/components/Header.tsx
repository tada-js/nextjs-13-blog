import Link from 'next/link';

const LINK_CLASS = 'hover:text-gray-800';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">
        <h1 className="text-3xl font-semibold -text--text-brand-1">My Blog</h1>
      </Link>

      <nav className="flex gap-4 text-gray-500">
        <Link href="/" className={LINK_CLASS}>
          홈
        </Link>
        <Link href="/posts" className={LINK_CLASS}>
          게시물
        </Link>
        <Link href="/about" className={LINK_CLASS}>
          소개
        </Link>
        <Link href="/contact" className={LINK_CLASS}>
          문의
        </Link>
      </nav>
    </header>
  );
};

export default Header;
