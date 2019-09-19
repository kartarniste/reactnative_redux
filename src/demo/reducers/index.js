import { USER_NAME, USER_ADDRESS } from "../constants/ActionTypes";

const initialState = {
  userName :"Kartar",
  userAddress:' Anantpur'
};

export default function userInfo(state=initialState, action){
  switch (action.type) {
    case USER_NAME:
        return {...state, userName:action.payload};
    case USER_ADDRESS:
        return  {...state, userAddress:action.payload};
    default:
      return state;
  }
}
