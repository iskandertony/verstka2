import Nav from "./Pages/Home/Nav";
import "./App.scss";
import SaveTime from "./Pages/Home/SaveTime";
import About from "./Pages/Home/About";

function App() {
  return (
    <div className="App">
      <div>
        {" "}
        <Nav />
        <SaveTime />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}

export default App;
