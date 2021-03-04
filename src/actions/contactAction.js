import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  CREATE_TODOLIST,
  GET_TODOLIST,
  UPDATE_TODOLIST,
  DELETE_TODOLIST
} from "../constant/types";

//  ****************************************** This part is for Contact ******************************************

// actions
export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
});

// get a contact
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

// update a contact
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

// delete a contact
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

// ****************************************** This part is To Do List ******************************************

export const addTodoList = (add) => ({
  type: CREATE_TODOLIST,
  payload: add,
});

export const getTodoList = (id) => ({
  type: GET_TODOLIST,
  payload: id,
});

export const updateToDoList = (todolist) => ({
  type : UPDATE_TODOLIST,
  payload: todolist,
});

export const deleteToDoList = (id) => ({
  type: DELETE_TODOLIST,
  payload : id,
});