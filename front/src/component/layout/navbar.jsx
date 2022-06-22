import "./navbar.css";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

function Navbar() {
  const { state , logout} = useContext(AuthContext);

  const onClick =()=>{
        logout();
  }

  return (
    <div className="nav">
      <div className="logo">Contact Book</div>
      <div className="menu">
        <ul className="list">
          {(!state.isAuthenticated) ?
          
            <Fragment>
              <li>
                <Link to="/login">
                  <p>Sign In</p>{" "}
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <p>Register</p>
                </Link>
              </li>
            </Fragment>
          :
              <>
              <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link onClick={onClick} to="/login">
              <p>Logout</p>
            </Link>
          </li>
              </>
          }
          
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
