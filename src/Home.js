import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("lishu");
  const [age, setAge] = useState(21);
  const handleClick = (e) => {
    setName("gupta");
    setAge(30);
  };
  const handleClickAnon = (name, e) => {};
  return (
    <div className="home">
      <h1>Home</h1>
      <button onClick={handleClick}>
        {name} is {age}
      </button>
      <button onClick={(e) => handleClickAnon("lishu", e)}>Click here</button>
    </div>
  );
};

export default Home;
