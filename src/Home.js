import React from "react";

const Home = () => {
  let name = "mario";
  const handleClick = (e) => {
    console.log(e);
    console.log("Hello");
  };
  const handleClickAnon = (name, e) => {
    console.log("Hello " + name, e.target);
  };
  return (
    <div className="home">
      <h1>Home</h1>
      <button onClick={handleClick}>Click here</button>
      <button onClick={(e) => handleClickAnon("lishu", e)}>Click here</button>
    </div>
  );
};

export default Home;
