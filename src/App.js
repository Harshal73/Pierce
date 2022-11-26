import About from "./components/About";
import Contact from "./components/Contact";
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
     <Contact/>
  
    </div>
  );
}

export default App;
