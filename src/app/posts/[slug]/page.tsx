import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/posts';
import Image from 'next/image';

interface Props {
  params: {
    slug: string;
  };
}

const PostPage = async ({ params }: Props) => {
  const post = await getPostData(params.slug);
  const { title, path, next, prev } = post;

  return (
    <article>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section></section>
    </article>
  );
};

export default PostPage;
