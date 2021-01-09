import _ from "lodash";
import { GET_TODOS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id"),
      };
    case ADD_TODO:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_TODO: // added
      return _.omit(state, action.payload);
    case EDIT_TODO: // added
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};
