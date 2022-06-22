import React, { useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContex";
import ContactItem from "./ContactItem";

function Contacts() {
  const { state, getContact } = useContext(ContactContext);
  useEffect(() => {
    getContact();
  }, []);
  const { contacts } = state;

  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </div>
  );
}

export default Contacts;
