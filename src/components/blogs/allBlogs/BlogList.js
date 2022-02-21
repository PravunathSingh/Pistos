import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ allBlogs }) => {
  const allArticles = allBlogs.map((blog) => {
    return <BlogItem key={blog.blog_id} blog={blog} />;
  });

  return (
    <div className='grid mb-20 md:mb-28 gap-14 lg:gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {allArticles}
    </div>
  );
};

export default BlogList;
