import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Introduction from "./Components/Introduction/Introduction";
import Aboutme from "./Components/About/Aboutme";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Introduction></Introduction>
      <Aboutme></Aboutme>
    </div>
  );
}

export default App;
