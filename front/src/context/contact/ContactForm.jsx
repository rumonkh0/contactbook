import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContex";
import styles from "./contact.module.css";
import style from "../pages/login.module.css";

function contactForm() {
  const { state, addContact } = useContext(ContactContext);
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addContact(formData);
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <h1>Edit contact</h1>
      <input type="text" name="name" placeholder="Enter contact name" 
            onChange={onChange}/>
      <input type="email" name="email" placeholder="Enter email address" 
            onChange={onChange}/>
      <input type="text" name="phone" placeholder="Enter phone number" 
            onChange={onChange}/>
      <p style={{ color: "black", margin: "0 0 7px 0" }}>Type</p>
      <div className={styles.label}>
        <label>
          <input
            className={styles.radio}
            type="radio"
            name="type"
            value="personal"
            onChange={onChange}
          />{" "}
          Personal
        </label>
        <label>
          <input
            className={styles.radio}
            type="radio"
            name="type"
            value="professional"
            onChange={onChange}
          />
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
