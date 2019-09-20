import React from 'react';
import { TextInput, Button, View, Text, Alert } from 'react-native';

export default ToDoComponent =({userName, userAddress, onChangeText, value, addToDoPress, todoList})=>{
  return(
    <View style={{ padding:20, flex:1 }}>
        <View style={{ flexDirection:"row", justifyContent:'space-between'}}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex:1 }}
            onChangeText={onChangeText}
            value={value}
          />
          <Button
              title="Add ToDo"
              style={{ paddingLeft : 20}}
              onPress={addToDoPress}
          />
      </View>
      <View>
      {
        todoList && todoList.map((text)=>{
          return(
            <View style={{borderColor:"#43AA8B", marginVertical:5, borderWidth:1}}>
              <Text style={{padding:5}}>{text}</Text>
            </View>
          )
        })
      }
      </View>

      <View style={{marginTop:80, flexDirection:"column", justifyContent:'flex-end', alignItems:'flex-end'}}>
          <Text>Author : {userName},  </Text>
          <Text>Address : {userAddress}</Text>
      </View>
    </View>
  );
}
