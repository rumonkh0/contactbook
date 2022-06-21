import React from 'react'
import { Link } from "react-router-dom";
import style from './login.module.css'

function register() {
  return (
    <div className={style.body}>
        <div className={style.login}>
        <h1>Sign Up</h1>
        <form method="post">
        <input
            type="text"
            name="u"
            placeholder="Name"
            required="required"
          />
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
            Sign Up
          </button>
          <p>Already signed up? <Link to="/login"> <span 
          style={{color:"rgb(174, 174, 252)"}}>Sign In</span> </Link></p>
        </form>
      </div>
    </div>
  )
}

export default register