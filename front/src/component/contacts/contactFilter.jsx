import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContex";

function ContactFilter() {
  const { filterContact, clearFilter } = useContext(ContactContext);
  const onChange = (e) => {
    if (e.target.value !== "") {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form action="">
      <h1>Search contact</h1>
      <input type="text" placeholder="Search" onChange={onChange} />
    </form>
  );
}

export default ContactFilter;
