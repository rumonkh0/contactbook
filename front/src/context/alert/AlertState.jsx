import React, {  useReducer } from "react";
import alertContext from "./alertContext";
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from "../Types";

function AlertState(props) {
  const initialState = [];
  const [state, dispatch] = useReducer(alertReducer, initialState);
  //set alert
  const setAlert = (msg) => {
    dispatch({
      type: SET_ALERT,
      payload: {msg},
    });

    setTimeout(() =>
      dispatch({type: REMOVE_ALERT})
    , 3000);
  };

  return (
    <alertContext.Provider value={{ state }}>{props.children}</alertContext.Provider>
  );
}

export default AlertState;
