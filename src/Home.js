import React from "react";

const Home = () => {
  const handleClick = () => {
    console.log("Hello");
  };
  const handleClickAnon = (name) => {
    console.log("Hello " + name);
  };
  return (
    <div className="home">
      <h1>Home</h1>
      <button onClick={handleClick}>Click here</button>
      <button onClick={() => handleClickAnon("lishu")}>Click here</button>
    </div>
  );
};

export default Home;
