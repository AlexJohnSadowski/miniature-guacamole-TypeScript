import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";
import Create from "./Create";

const Home = () => {
  const { data: blogs, isLoading } = useFetch("http://localhost:3004/blogs");
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
