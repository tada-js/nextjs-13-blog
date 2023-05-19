import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  post: Post;
}

const PostCard = ({
  post: { title, category, date, description, path },
}: Props) => {
  return (
    <Link href={`/posts/${path}`}>
      <article>
        <Image
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div>
          <time>{date.toString()}</time>
          <h3>{title}</h3>
          <p>{description}</p>
          <span>{category}</span>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
