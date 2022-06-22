import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import { Link } from "react-router-dom";
import style from "./login.module.css";

function Register() {
  const { register, state } = useContext(AuthContext);
  const [formData, setFormData] = useState({});
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };

  if (state.isAuthenticated) {
    return <Navigate to="/" />;
  }


  return (
    <div className={style.body}>
      <div className={style.login}>
        <h1>Sign Up</h1>
        <form method="post" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Name" required="required" 
            onChange={onChange}/>
          <input type="text" name="email" placeholder="Email" required="required" 
            onChange={onChange}/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required="required"
            onChange={onChange}
          />
          <button
            type="submit"
            className={`${style.btn} ${style.btnPrimary} ${style.btnBlock} ${style.btnLarge}`}
          >
            Sign Up
          </button>
          <p>
            Already signed up?{" "}
            <Link to="/login">
              {" "}
              <span style={{ color: "rgb(174, 174, 252)" }}>Sign In</span>{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
