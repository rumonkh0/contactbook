import Navbar from "./component/layout/navbar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./component/pages/home";
import Login from "./component/pages/login";
import Register from "./component/pages/register";
import About from "./component/pages/about";

function App() {
  return (
    <BrowserRouter><div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div></BrowserRouter>
    
  );
}

export default App;
