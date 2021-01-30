import React from "react";
import { Link } from "react-router-dom";

export type BlogPostType = {
  title: string
  author: string
  body: string
  id: string
}

type PropsType = {
  blogs: BlogPostType[]
}

const BlogList = ({ blogs }: PropsType) => {
  console.log(blogs);
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
