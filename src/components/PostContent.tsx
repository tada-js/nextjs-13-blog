import { PostData } from '@/service/posts';
import { AiTwotoneCalendar } from 'react-icons/ai';
import MarkdownViewer from './MarkdownViewer';

interface Props {
  post: PostData;
}

const PostContent = ({ post }: Props) => {
  const { title, description, date, content } = post;

  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center self-end text-gray-500">
        <AiTwotoneCalendar />
        <p className="ml-1 font-semibold">{date.toString()}</p>
      </div>
      <MarkdownViewer content={content} />
    </section>
  );
};

export default PostContent;
