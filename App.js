/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ToDo from './src/demo/containers/ToDo';
import reducers from './src/demo/reducers';


const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
      <Provider store={store}>
        <ToDo />
      </Provider>
  );
};

export default App;
