import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  const name = "lishu gupta";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
