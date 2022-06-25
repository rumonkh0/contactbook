import axios from "axios";
import React, { useReducer } from "react";
import {
  SET_LOADING,
  AUTH_ERROR,
  CLEAR_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../Types";
import authContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  
//  const setLoading = () => dispatch({ type: SET_LOADING });

  //register user
  const register = async (formdata) => {
    try {
        console.log('register going');
      const res = await axios.post("/api/v1/auth/register", formdata);

      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: REGISTER_FAIL });
    }
  };

  //login user
  const login = async (formdata) => {
    try {
      const res = await axios.post('/api/v1/auth/login', formdata);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL , payload: error.response.data.error});
    }
  };

  //logout
  const logout = async () => {
    await axios.get("/api/v1/auth/logout");

    dispatch({ type: LOGOUT });
  };

  //load user
  const loadUser = async () => {
    // setLoading();
    try {
      const res = await axios.get("/api/v1/auth/me");

      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  //clear error
  const clearError = () => {dispatch({type: CLEAR_ERROR})};

  return (
    <authContext.Provider value={{ state, register, login, logout, loadUser, clearError }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
