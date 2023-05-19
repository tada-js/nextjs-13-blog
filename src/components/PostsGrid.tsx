import { Post } from '@/service/posts';
import PostCard from './PostCard';

interface Props {
  posts: Post[];
}

const PostsGrid = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsGrid;
