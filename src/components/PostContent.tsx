import { PostData } from '@/service/posts';
import { AiTwotoneCalendar } from 'react-icons/ai';
import MarkdownViewer from './MarkdownViewer';

interface Props {
  post: PostData;
}

const PostContent = ({ post }: Props) => {
  const { date, content, title, description } = post;

  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center self-end text-gray-500">
        <AiTwotoneCalendar />
        <p className="ml-1 font-semibold">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mb-1 mt-4 text-xl font-bold">{description}</p>
      <div className="mb-8 mt-4 w-44 border-2 border-orange-400" />
      <MarkdownViewer content={content} />
    </section>
  );
};

export default PostContent;
