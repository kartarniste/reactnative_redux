/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React from 'react';
// import { View, Text } from 'react-native';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
//
// import ToDo from './src/demo/containers/ToDo';
// import reducers from './src/demo/reducers';
//
//
// const store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
//
// const App = () => {
//   return (
//       <Provider store={store}>
//         <ToDo />
//       </Provider>
//   );
// };
//
// export default App;

import React, { Component } from "react";
import { Button } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStackNavigator } from 'react-navigation';


import reducers from './src/demo/reducers';
import ToDo from "./src/demo/containers/ToDo";
import UserInfo from "./src/demo/containers/UserInfo";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reducers);
// const store = createStoreWithMiddleware(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStoreWithMiddleware(
   reducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const MainStack = createStackNavigator({
  ToDo:{
    screen:()=><ToDo />,
    navigationOptions: ({ navigation }) => ({
      title:'Home',
      headerRight:<Button title='Navigate' onPress={()=> navigation.navigate('UserInfo')} />
   })
  },
  UserInfo:{
    screen:()=><UserInfo />,
    navigationOptions:{
      title:'User Info'
    }
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainStack />
      </Provider>
    );
  }
}

export default App;
