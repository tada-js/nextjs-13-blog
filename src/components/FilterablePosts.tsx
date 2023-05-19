'use client';

import { Post } from '@/service/posts';
import PostsGrid from './PostsGrid';
import { useState } from 'react';

interface Props {
  posts: Post[];
  categories: string[];
}

const ALL_POSTS = 'All Posts';

const FilterablePosts = ({ posts, categories }: Props) => {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section>
      <PostsGrid posts={filtered} />
    </section>
  );
};

export default FilterablePosts;
