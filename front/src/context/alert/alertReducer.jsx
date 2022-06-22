import { SET_ALERT, REMOVE_ALERT } from "../Types";
const alertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state,  action.payload ];
    case REMOVE_ALERT:
      return [];
    default:
      throw new Error(`Unsupported type of: ${action.type}`);
  }
};
