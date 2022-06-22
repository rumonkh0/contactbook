import React, { useContext } from "react";
import mark from "./contact.module.css";
import ContactContext from "../../context/contact/contactContex";

const ContactItem = ({ contact }) => {
  const { state, deleteContact } = useContext(ContactContext);
  const {_id, name, email, phone, type } = contact;

  const style = {
    backgroundColor: "red",
  };
const onClick = (e) => {
    e.preventDefault();
    console.log(_id);
    deleteContact(_id);
}

  return (
    <div className={mark.main}>
      <div className={mark.info}>
        <h2 style={{ margin: "5px" }}>{name}</h2>
        {/* <h5 style={{ margin: "3px 5px" }}>{email}</h5> */}
        <h1 style={{ margin: "5px" }}>{phone}</h1>
      </div>
      <div className={mark.edit}>
        <div className={mark.first}>
          <p style={type === "personal" ? style : {}}>{type}</p>
        </div>
        <div className={mark.second}>
          <button>Edit</button>
          <button onClick={onClick}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
