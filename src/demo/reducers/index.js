import { USER_NAME, USER_ADDRESS, ADD_TEXT, ADD_TODO } from "../constants/ActionTypes";

const initialState = {
  userName :"Kartar",
  userAddress:' Anantpur',
  value : '',
  todoList:[]
};

export default userInfo=(state=initialState, action)=>{
  switch (action.type) {
    case USER_NAME:
        return {...state, userName:action.payload};
    case USER_ADDRESS:
        return  {...state, userAddress:action.payload};
    case ADD_TEXT:
        return  {...state, value:action.payload};
    case ADD_TODO:
        return  {...state, todoList:[...state.todoList, state.value], value:''};
    default:
      return state;
  }
}
