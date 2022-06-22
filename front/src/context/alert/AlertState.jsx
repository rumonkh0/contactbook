import React, { useContext, useReducer } from "react";
import alertContext from "./alertContext";
import { SET_ALERT, REMOVE_ALERT } from "../Types";
import React from "react";

function AlertState() {
  const initialState = [];
  const [state, dispatch] = useReducer(alertReducer, initialState);
  //set alert
  const setAlert = (msg) => {
    dispatch({
      type: SET_ALERT,
      payload: {msg},
    });

    setTimeout(() => {
      dispatch(REMOVE_ALERT);
    }, 3000);
  };

  return (
    <alertContext.Provider value={{ state }}>AlertState</alertContext.Provider>
  );
}

export default AlertState;
