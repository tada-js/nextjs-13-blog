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
      <article className="overflow-hidden rounded-md shadow-md hover:shadow-xl">
        <div className="relative h-[200px] w-full">
          <Image
            className="max-h-64 w-full max-w-sm object-cover"
            src={`/images/posts/${path}.png`}
            alt={title}
            fill
          />
        </div>
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-400">{date.toString()}</time>
          <h3 className="w-full truncate text-lg font-semibold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="my-2 rounded-lg bg-orange-200 px-2 text-sm">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
