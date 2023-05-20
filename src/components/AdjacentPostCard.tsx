import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Props {
  post: Post;
  type: 'prev' | 'next';
}

const AdjacentPostCard = ({
  post: { path, title, description },
  type,
}: Props) => {
  return (
    <Link href={`/posts/${path}`}>
      <Image
        src={`/images/posts/${path}.png`}
        width={150}
        height={100}
        alt={title}
      />
      <div>
        {type === 'prev' && <FaArrowLeft />}
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {type === 'next' && <FaArrowRight />}
      </div>
    </Link>
  );
};

export default AdjacentPostCard;
