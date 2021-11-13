import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  const [name, setName] = useState("lishu");

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  };

  useEffect(() => {
    console.log(name);
    return () => {};
  }, [name]);
  return (
    <div className="home">
      <p>{name} </p>
      <button onClick={() => setName("gupta")}>Change Name</button>
      <BlogList blogs={blogs} title="All Blog" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        handleDelete={handleDelete}
        title="Mario's Blog"
      />
    </div>
  );
};

export default Home;
