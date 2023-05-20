import FeaturedPosts from '@/components/FeaturedPosts';
import Profile from '@/components/Profile';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Profile />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
    </>
  );
}
