import { GET_ALL_USERS, GET_USER_BY_ID, CREATE_USER, EDIT_USER } from "./action-types";


const initialState = {
  users: [],
  user: []
};
const reducer = (state = initialState, action, payload) => {
  switch (action.type) {
    case GET_ALL_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case GET_USER_BY_ID: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.email === payload.email) {
            return payload;
          } else {
            return user;
          }
        }),
      };
    default: {
      return state;
    }
    
  }
};

export default reducer;
