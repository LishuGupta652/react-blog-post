import React from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();
  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    });
    history.push("/");
  };
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
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
