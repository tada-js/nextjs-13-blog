import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Props {
  post: Post;
  type: 'prev' | 'next';
}

const ICON_CLASS =
  'm-4 text-5xl text-yellow-300 transition-all group-hover:text-6xl';

const AdjacentPostCard = ({
  post: { path, title, description },
  type,
}: Props) => {
  return (
    <Link
      href={`/posts/${path}`}
      className="relative max-h-56 w-full overflow-hidden bg-black"
    >
      <Image
        className="w-full opacity-50"
        src={`/images/posts/${path}.png`}
        width={150}
        height={100}
        alt={title}
      />
      <div className="group absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-around px-8 text-white">
        {type === 'prev' && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="font-semibold">{description}</p>
        </div>
        {type === 'next' && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
};

export default AdjacentPostCard;
