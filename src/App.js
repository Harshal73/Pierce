import About from "./components/About";
import Home from "./components/Home";
import { Last } from "./components/Last";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">

     <Navbar/>
     <Home/>
     <About/>
     <Last/>  
  
    </div>
  );
}

export default App;
