import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

function Alert() {
  const style = {
    position: 'absolute',
    top: '60px',
    left: '20%',
    padding: "0.7rem",
    margin: "1rem 0",
    opacity: "0.9",
    background: "yellow",
    color: "#333",
  };
  const { state } = useContext(AlertContext);
  return state.length > 0 && <div style={style} >{state.map((msg) => <div key={Math.round(Math.random()*100000000000) }>{msg.msg}</div>)}</div> 
}

export default Alert;
