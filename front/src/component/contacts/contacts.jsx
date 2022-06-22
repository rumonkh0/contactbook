import React, { useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContex";
import ContactItem from "./ContactItem";

function Contacts() {
  const { state, getContact } = useContext(ContactContext);
  useEffect(() => {
    getContact();
  }, []);
  const { contacts, filtered } = state;

  return (
    <div>
      {(filtered === null)? 
      contacts.map((contact) => (
        <ContactItem key={contact._id} contact={contact} />
      )):filtered.map((contact) => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </div>
  );
}

export default Contacts;
