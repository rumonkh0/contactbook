import "./navbar.css";
import { Link } from "react-router-dom";
import React from "react";

function navbar() {
  return (
    <div className="nav">
      <div className="logo">Contact Book</div>
      <div className="menu">
        <ul className="list">
          <li>
            <Link to="/login"> <p>Sign In</p> </Link>
          </li>
          <li>
            <Link to="/register"><p>Register</p></Link>
          </li>
          <li>
            <Link to="/"><p>Home</p></Link>
          </li>
          <li>
            <Link to="/about"><p>About</p></Link>
          </li>
          <li>
            <Link to="/about"><p>Logout</p></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default navbar;
