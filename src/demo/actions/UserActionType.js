import { USER_NAME, USER_ADDRESS, ADD_TEXT, ADD_TODO } from "../constants/ActionTypes";

export const getUserName=(text)=>{
  return{
    type : USER_NAME,
    payload : text
  }
}

export const getUserAddress = (address)=>{
    return{
      type:USER_ADDRESS,
      payload : address
    }
}

export const addText=(text)=>{
  return{
    type : ADD_TEXT,
    payload : text
  }
}

export const addTODO=()=>{
  return{
    type : ADD_TODO,
  }
}
