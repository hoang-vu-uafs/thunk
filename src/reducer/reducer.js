import { combineReducers } from "redux";

function postReducer(state = [], action) {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  posts: postReducer,
});
