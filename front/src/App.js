import Navbar from "./component/layout/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import Register from "./component/pages/Register";
import About from "./component/pages/About";
import AuthState from "./context/auth/AuthState";
import ContactState from "./context/contact/ContactState";

function App() {
  return (
    <AuthState>
      <ContactState>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </ContactState>
    </AuthState>
  );
}

export default App;
