import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import { Link } from "react-router-dom";
import style from "./login.module.css";

function Login() {
  const { login, clearError, state } = useContext(AuthContext);
  const { error } = state;
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    if (error) {
      setAlert(error);
      clearError();
    }
  }, [error]);

  const [formData, setFormData] = useState({});
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields");
    } else {
      login(formData);
    }
  };
  if (state.loading) {
    return <div>loading</div>;
  }

  if (state.isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div className={style.body}>
      <div className={style.login}>
        <h1>Sign In</h1>
        <form method="post" onSubmit={onSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            required="required"
            onChange={onChange}
          />
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
            Sign In
          </button>
          <p>
            Not have a account?{" "}
            <Link to="/register">
              {" "}
              <span style={{ color: "rgb(174, 174, 252)" }}>Sign Up</span>{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
