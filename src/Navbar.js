import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="home">
        <h2>Blog</h2>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create">New Blog</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
