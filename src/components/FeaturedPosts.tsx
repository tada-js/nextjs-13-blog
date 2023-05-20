import { getFeaturedPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';

const FeaturedPosts = async () => {
  const posts = await getFeaturedPosts();
  return (
    <section className="mx-4 my-12">
      <h2 className="my-2 text-2xl font-medium text-left -text--text-brand-3">
        추천 게시물
      </h2>
      <div className="mb-6 border-b-4 border-orange-100 w-28"></div>

      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
