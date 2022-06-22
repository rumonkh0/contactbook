import React, { useContext } from "react";
import mark from "./contact.module.css";
import ContactContext from "../../context/contact/contactContex";

const ContactItem = ({ contact }) => {
  const { deleteContact, editContact } = useContext(ContactContext);
  const {_id, name, email, phone, type } = contact;

  const style = {
    backgroundColor: "red",
  };


  return (
    <div className={mark.main}>
      <div className={mark.info}>
        <h2 style={{ margin: "5px" }}>{name}</h2>
        <h4 style={{ margin: "3px 5px" }}>{email}</h4>
        <h1 style={{ margin: "5px" }}>{phone}</h1>
      </div>
      <div className={mark.edit}>
        <div className={mark.first}>
          <p style={type === "personal" ? style : {}}>{type}</p>
        </div>
        <div className={mark.second}>
          <button onClick={()=>editContact(contact)}>Edit</button>
          <button onClick={()=>deleteContact(_id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
