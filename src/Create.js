import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
    setLoading(true);
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Blog Created");
      setLoading(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h1>Create a new blog</h1>

      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog content</label>
        <textarea
          type="text"
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <label>Blog Author</label>
        <select onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!loading && <button>Add Blog</button>}
        {loading && <button>Loading...</button>}
      </form>
    </div>
  );
};

export default Create;
