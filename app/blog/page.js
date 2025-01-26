import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define function to fetch blog data
const getBlogs = () => {
  const blogDir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(blogDir);

  return files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      ...data,
      slug: filename.replace('.md', ''), // Remove .md extension
    };
  });
};

const Blog = () => {
  const blogs = getBlogs();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden dark:border-2">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <div className="text-sm mb-4">
                <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB')}</span>
              </div>
              <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>
                Click here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
