import React, { Component } from 'react';
import { View, Text } from 'react-native';
import UserInfoComponent from '../components/UserInfoComponent';
import { addText, addTODO } from '../actions/UserActionType';

import { connect } from "react-redux";

const UserInfo =(props)=>{
  return (
    <UserInfoComponent {...props} />
  );
}

const mapStateToProps =(state)=>({
  todoList : state.todoList
});

export default connect(mapStateToProps)(UserInfo);
