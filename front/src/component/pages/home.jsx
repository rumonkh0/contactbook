import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import Contacts from "../contacts/Contacts";

function Home() {
  const { loadUser, state } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const style = {
    display: "flex",
    backgroundColor: "#8EC5FC",
    backgroundImage: "linear-gradient(270deg, #8EC5FC 0%, #E0C3FC 100%)",
    height: `calc(100vh-60px)`,
    flexWrap: "wrap",
  };

  const form = {
    padding: "20px",
    width: "300px",
    flexGrow: "1",
    alingSelf: "center",
    display: "flex",
    justifyContent: "center",
    paddingTop: "80px",
  };

  const contact = {
    padding: "20px",
    display: "flex",
    justifyContent: "start",
    flexDirection: "column",
    minWidth: "300px",
    height: "100%",
    flexGrow: "1",
    alingSelf: "center",
    paddingBottom: "80px",
    overflowY: "auto",
    MsOverflowStyle: "none" /* IE and Edge */,
    scrollbarWidth: "none",
  };
  if (state.loading) {
    return <div>loading</div>;
  }

  if (!state.isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <div style={style}>
      <div style={form}>
        <ContactForm />
      </div>
      <div style={contact}>
        <div>
          <ContactFilter />
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default Home;
