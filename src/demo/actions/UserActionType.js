import { USER_NAME, USER_ADDRESS } from "../constants/ActionTypes";

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
