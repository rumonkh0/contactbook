import React from "react"; 
import {useReducer}  from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS, 
  LOGIN_FAIL,
  LOGOUT,
} from "../Types";

const authState = (props) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //register user
  const register = async (formdata) => {
    try {
      const res = await axios.post("/api/v1/auth/register", formdata);

      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: REGISTER_FAIL });
    }
  };

  //login user
  const login = async (formdata) => {
    try {
      const res = await axios.post("/api/v1/auth/login");

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL });
    }
  };

  //logout
  const logout = async () => {
    await axios.get("/api/v1/auth/logout");

    dispatch({ type: LOGOUT });
  };

  //load user
  const loadUser = async () => {
    try {
      const res = await axios.get("/api/v1/auth/me");

      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  return (
    <authContext.Provider value={{ state, register, login, logout, loadUser }}>
      {props.children}
    </authContext.Provider>
  );
};

export default authState;
