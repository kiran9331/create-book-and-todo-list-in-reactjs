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

const intialState = {
  contacts: [
    // {
    //   id: 1,
    //   name: "Kiran",
    //   email: "kiran@gmail.com",
    //   phone: "1234567899",
    // },
  ],
};

const initialTodolist = {
  todolists: [
    // {
    //   id: 2,
    //   todolistName: "Test 1",
    // },
  ],
}

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id != action.payload
        ),
      };
    default:
      return state;
  }
};

// ****************************************** This Part is For ToDoList ******************************************

export const toDoListReducer = (statetodolist = initialTodolist, action) => {
  switch (action.type) {

    case CREATE_TODOLIST :
      return {
        ...statetodolist,
        todolists: [action.payload, ...statetodolist.todolists]
      }

    case GET_TODOLIST :
      let arrtodo = statetodolist.todolists.filter(
        (todo) => todo.id === action.payload
      );
      arrtodo = arrtodo.values();
      for (let valtodo of arrtodo) {
        arrtodo = valtodo;
      }
      return {
        ...statetodolist,
        todolist: arrtodo,
      }

    case UPDATE_TODOLIST :
      return {
        ...statetodolist,
        todolists: statetodolist.todolists.map((todolist) =>
        todolist.id == action.payload.id ? action.payload : todolist
        ),
      };

      case DELETE_TODOLIST :
        return {
          ...statetodolist,
          todolists : statetodolist.todolists.filter((delid) => delid.id != action.payload )
        }

    default:
      return statetodolist;
  }
}