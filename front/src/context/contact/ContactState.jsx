import React, { useReducer } from "react";
import contactContext from "./contactContex";
import contactReducer from "./contactReducer";
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from "../Types";
import axios from "axios";

const ContactState = (props) => {
  const initialState = {
      contacts:[],
      loading: false
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //get contacts
  const getContact = async () => {
    try {
      const res = await axios.get("/api/v1/contacts");
      console.log(res.data.contacts);
      dispatch({
        type: GET_CONTACTS,
        payload: res.data.contacts,
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //add contact
  const addContact = async (formData) => {
    try {
      const res = await axios.post("/api/v1/createcontact", formData);

      dispatch({
        type: ADD_CONTACT,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //delete contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`/api/v1/contact/${id}`);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  return (
    <contactContext.Provider
      value={{ state, getContact, addContact, deleteContact }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
