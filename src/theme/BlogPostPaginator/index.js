import React from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import { CommentSection } from '../../components/CommentSection';

export default function BlogPostPaginatorWrapper(props) {
  return (
    <>
      <BlogPostPaginator {...props} />
      <CommentSection/>
    </>
  );
}
