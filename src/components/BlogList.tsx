import React from "react";
import { Link } from 'react-router-dom'

const BlogList = ({ blogs }: any) => {
  return (
    <div>
      {blogs.map((blog: any) => (
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
