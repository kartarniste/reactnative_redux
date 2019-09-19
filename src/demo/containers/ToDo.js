import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from "react-redux";

const ToDo =({userName, userAddress})=>{
  return (
    <View>
      <Text>{userName}</Text>
      <Text>{userAddress}</Text>
    </View>
  );
}

const mapStateToProps =(state)=>({
  userName : state.userName,
  userAddress : state.userAddress
});

export default connect(mapStateToProps)(ToDo);
