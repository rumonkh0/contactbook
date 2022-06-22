import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactForm from "../contacts/contactForm";
import ContactFilter from "../contacts/contactFilter";
import Contacts from "../contacts/contacts";

function Home() {
  const { loadUser, state } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  const style = {
    display: "flex",
    backgroundColor: "#8EC5FC",
    backgroundImage: "linear-gradient(270deg, #8EC5FC 0%, #E0C3FC 100%)",
    height: "100vh",
  };

  const form = {
    padding: "20px",
    flexBasis: "150px",
    flexGrow: "1",
    alingSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "80px",
  };

  const contact = {
    padding: "60px",
    display: "flex",
    justifyContent: "start",
    flexDirection: "column",
    flexBasis: "150px",
    flexGrow: "1",
    paddingBottom: "80px",
    overflowY: "auto",
    MsOverflowStyle: "none" /* IE and Edge */,
    scrollbarWidth: "none",
  };

  if (!state.isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <div style={style}>
      <div style={form}>
        <ContactForm />
      </div>
      <div style={contact}>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
}

export default Home;
