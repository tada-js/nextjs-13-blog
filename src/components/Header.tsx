import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href="/">
        <h1>My Blog</h1>
      </Link>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/posts">게시물</Link>
        <Link href="/about">소개</Link>
        <Link href="/contact">문의</Link>
      </nav>
    </header>
  );
};

export default Header;
