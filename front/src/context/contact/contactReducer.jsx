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

const contactReducer = (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact._id !== action.payload),
      };
    case UPDATE_CONTACT:
    case CLEAR_CURRENT:
    case SET_CURRENT:
    case CLEAR_CONTACTS:
    case CONTACT_ERROR:
    default:
      throw new Error(`Unsupported type of: ${action.type}`);
  }
};

export default contactReducer;
