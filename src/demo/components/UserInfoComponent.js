import React from 'react';
import { View, Text} from 'react-native';

const UserInfoComponent =({ todoList })=>{
  return(
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
  );
}

export default UserInfoComponent;
