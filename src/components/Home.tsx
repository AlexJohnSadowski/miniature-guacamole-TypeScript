import React from "react";
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

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
