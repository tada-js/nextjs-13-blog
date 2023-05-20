import { getNonuredePosts } from '@/service/posts';
import Link from 'next/link';
import MultiCarousel from './MultiCarousel';
import PostCard from './PostCard';

const CarouselPosts = async () => {
  const posts = await getNonuredePosts();
  return (
    <section className="mx-4 my-16">
      <div className="flex items-center justify-between my-2">
        <h2 className="text-2xl font-medium text-left -text--text-brand-3">
          다른 게시물
        </h2>
        <Link href="/posts">
          <h3 className="text-gray-400 hover:text-gray-600">더 보기</h3>
        </Link>
      </div>
      <div className="mb-4 border-b-4 border-orange-100 w-28"></div>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
};

export default CarouselPosts;
