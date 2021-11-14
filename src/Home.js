import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <h1>Loading...</h1>}
      {blogs && <BlogList blogs={blogs} title="All Blog" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        handleDelete={handleDelete}
        title="Mario's Blog"
      /> */}
    </div>
  );
};

export default Home;
