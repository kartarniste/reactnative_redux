import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ToDoComponent from '../components/ToDoComponent';
import { addText, addTODO } from '../actions/UserActionType';

import { connect } from "react-redux";

const ToDo =(props)=>{
  return (
    <ToDoComponent {...props} />
  );
}

const mapStateToProps =(state)=>({
  userName : state.userName,
  userAddress : state.userAddress,
  value : state.value,
  todoList : state.todoList
});

const mapDispatchToProps = (dispatch)=>{
  return {
    onChangeText : (text)=> dispatch(addText(text)),
    addToDoPress : ()=> dispatch(addTODO())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
