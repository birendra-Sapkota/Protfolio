import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Introduction from "./Components/Introduction/Introduction";
import Aboutme from "./Components/About/Aboutme";
import Experiencs from "./Components/Resume/Experience/Experiencs";
import Protfolio from "./Components/Protfolio/Protfolio";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Introduction></Introduction>
      <Aboutme></Aboutme>
      <Experiencs></Experiencs>
      <Protfolio></Protfolio>
    </div>
  );
}

export default App;
