import { combineReducers } from "redux";
import { contactReducer, toDoListReducer } from "./contactReducer";

export default combineReducers({
  contactR: contactReducer,
  todolistR: toDoListReducer,
});
