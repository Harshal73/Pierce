import About from "./components/About";
import Home from "./components/Home";
import { Last } from "./components/Last";
import Navbar from "./components/Navbar";
import Products from "./components/Products";


function App() {
  return (
    <div className="App">

     <Navbar/>
     <Home/>
     <About/>
     <Products/>
     <Last/>  
  
    </div>
  );
}

export default App;
