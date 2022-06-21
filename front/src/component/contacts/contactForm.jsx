import React from "react";
import styles from "./contact.module.css";
import style from "../pages/login.module.css";

function contactForm() {
  return (
    <form action="">
      <h1>Edit contact</h1>
      <input type="text" name="name" placeholder="Enter contact name" />
      <input type="email" name="email" placeholder="Enter email address" />
      <input type="text" name="phone" placeholder="Enter phone number" />
      <p style={{ color: "black", margin: "0 0 7px 0" }}>Type</p>
      <div className={styles.label}>
        <label>
          <input className={styles.radio} type="radio" value="personal" />{" "}
          Personal
        </label>
        <label>
          <input className={styles.radio} type="radio" value="professional" />
          Professional
        </label>
      </div>
      <button
        type="submit"
        // className={styles.button}
        className={`${style.btn} ${styles.button} ${style.btnBlock} ${style.btnLarge}`}
      >
        Add contact
      </button>
    </form>
  );
}

export default contactForm;
