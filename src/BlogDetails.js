import React from "react";
import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {loading && <div>Loading...</div>}
      {error && <div>Error!</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by : {blog.author}</p>
          <hr />
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
