'use client';

import { Post } from '@/service/posts';
import PostsGrid from './PostsGrid';
import { useState } from 'react';
import Categories from './Categories';

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
    <section className="m-4 flex">
      <PostsGrid posts={filtered} />
      <Categories
        categories={categories}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
};

export default FilterablePosts;
