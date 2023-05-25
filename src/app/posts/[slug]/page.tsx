import AdjacentPostCard from '@/components/AdjacentPostCard';
import PostContent from '@/components/PostContent';
import { getAllPosts, getPostData } from '@/service/posts';
import { Metadata } from 'next';
import Image from 'next/image';

interface Props {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { title, description } = await getPostData(params.slug);
  return {
    title,
    description,
  };
};

const PostPage = async ({ params }: Props) => {
  const post = await getPostData(params.slug);
  const { next, prev } = post;

  return (
    <article className="m-12 mx-auto max-w-screen-xl overflow-hidden rounded-2xl -bg--sub-color shadow-lg lg:p-24">
      <PostContent post={post} />
      <section className="shadow-md sm:flex lg:flex">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
};

export default PostPage;

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.path }));
};
