import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContex";
import styles from "./contact.module.css";
import style from "../pages/login.module.css";

function ContactForm() {
  const { state, addContact, updateContact } = useContext(ContactContext);
  const { current, contacts } = state;

  const initialData = {
    email: "",
    name: "",
    phone: "",
    type: "personal",
  };
  const [formData, setFormData] = useState(initialData);
  useEffect(() => {
    if (current !== null) {
      setFormData(current);
    } else {
      setFormData(initialData);
    }
  }, [current, contacts]);

  const { email, name, phone, type } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    {
      current === null
        ? addContact(formData)
        : updateContact(current._id, formData);
    }
    setFormData(initialData);
  };

  return (
    <form id="form" action="" onSubmit={onSubmit}>
      <h1>{current === null ? "Add contact" : "Edit contact"}</h1>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Enter contact name"
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Enter email address"
        onChange={onChange}
      />
      <input
        type="number"
        name="phone"
        value={phone}
        placeholder="Enter phone number"
        onChange={onChange}
      />
      <p style={{ color: "black", margin: "0 0 7px 0" }}>Type</p>
      <div className={styles.label}>
        <label>
          <input
            className={styles.radio}
            type="radio"
            name="type"
            value="personal"
            checked={type === "personal"}
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
            checked={type === "professional"}
            onChange={onChange}
          />
          Professional
        </label>
      </div>
      <button
        type="submit"
        // className={styles.button}
        className={`${styles.btn} ${styles.button} ${style.btnBlock} ${style.btnLarge}`}
      >
        {current === null ? "Add contact" : "Update contact"}
      </button>

      {current && <button
        className={`${style.btn} ${styles.button} ${style.btnBlock} ${style.btnLarge} ${styles.clear}`}
      >
        Clear form
      </button>}
      
    </form>
  );
}

export default ContactForm;
