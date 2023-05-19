import { PostData } from '@/service/posts';

interface Props {
  post: PostData;
}

const PostContent = ({ post }: Props) => {
  const { title, description, date, content } = post;

  return (
    <section>
      <div>
        <p>{date.toString()}</p>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default PostContent;
