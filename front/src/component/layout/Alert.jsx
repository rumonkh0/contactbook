import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

function Alert() {
  const style = {
    padding: "0.7rem",
    margin: "1rem 0",
    opacity: "0.9",
    background: "yellow",
    color: "#333",
  };
  const { state } = useContext(AlertContext);
  return state.length > 0 && state.map((msg) => <div style={style}>{msg}</div>);
}

export default Alert;
