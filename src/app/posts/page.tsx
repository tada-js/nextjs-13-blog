import FilterablePosts from '@/components/FilterablePosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '게시물',
  description: '개발 관련 블로그 글 모음',
};

const PostsPage = () => {
  return <FilterablePosts />;
};

export default PostsPage;
