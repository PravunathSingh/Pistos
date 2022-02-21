import React from 'react';
import BlogHeader from '../components/blogs/BlogHeader';
import Blogs from '../components/blogs/Blogs';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';

const AllBlogs = () => {
  return (
    <div>
      <Navbar />
      <BlogHeader />
      <Blogs />
      <Footer />
    </div>
  );
};

export default AllBlogs;
