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
  const { title, path, next, prev } = post;

  return (
    <article className="m-12 mx-auto max-w-screen-xl overflow-hidden rounded-2xl -bg--sub-color p-24 shadow-lg">
      <Image
        className="h-1/5 max-h-[500px] w-full"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
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
