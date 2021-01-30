import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";
import Create from "./Create";

export type BlogPostType = {
  title: string
  author: string
  body: string
  id: string
}


const Home = () => {
  const { data: blogs, isLoading } = useFetch<BlogPostType[]>("http://localhost:3004/blogs");
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
