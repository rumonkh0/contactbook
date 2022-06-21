import React from "react";
import { Link } from "react-router-dom";
import style from "./login.module.css";

function login() {
  return (
    
      <div className={style.body}>
          <div className={style.login}>
        <h1>Sign In</h1>
        <form method="post">
          <input
            type="text"
            name="u"
            placeholder="Email"
            required="required"
          />
          <input
            type="password"
            name="p"
            placeholder="Password"
            required="required"
          />
          <button type="submit" className={`${style.btn} ${style.btnPrimary} ${style.btnBlock} ${style.btnLarge}` }>
            Sign In
          </button>
          <p>Not have a account? <Link to="/register"> <span style={{color:"rgb(174, 174, 252)"}}>Sign Up</span> </Link></p>
        </form>
      </div>
      </div>
  );
}

export default login;
