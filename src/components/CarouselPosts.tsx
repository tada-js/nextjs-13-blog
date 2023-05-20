import { getNonuredePosts } from '@/service/posts';
import Link from 'next/link';
import MultiCarousel from './MultiCarousel';
import PostCard from './PostCard';

const CarouselPosts = async () => {
  const posts = await getNonuredePosts();
  return (
    <section>
      <div>
        <h2>다른 게시물</h2>
        <Link href="/posts">
          <h3>더 보기</h3>
        </Link>
      </div>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
};

export default CarouselPosts;
