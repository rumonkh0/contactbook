import React, { useReducer } from "react";
import contactContext from "./contactContex";
import contactReducer from "./contactReducer";
import {
  SET_LOADING,
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from "../Types";
import axios from "axios";


const ContactState = (props) => {
  const initialState = {
    contacts: [],
    loading: false,
    current: null,
    filtered: null,
  };


  const setLoading = () => dispatch({ type: SET_LOADING });

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //get contacts
  const getContact = async () => {
    try {
      setLoading();
      const res = await axios.get("/api/v1/contacts");
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
      // setAlert("CONTACT ADDED");
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
      // setAlert("CONTACT DELETED");
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //edit contact
  const editContact = (contact) => {
    // setAlert("PLEASE UPDATE YOUR CONTACT");
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //update contact
  const updateContact = async (id, formdata) => {
    try {
      await axios.put(`api/v1/contact/${id}`, formdata);
      // setAlert("CONTACT UPDATED");
      getContact();
      dispatch({ type: CLEAR_CURRENT });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg,
      });
    }
  };
  //
  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <contactContext.Provider
      value={{
        state,
        getContact,
        addContact,
        deleteContact,
        editContact,
        updateContact,
        filterContact,
        clearFilter,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
