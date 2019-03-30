import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    Provider,
    connect
} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'

import Navigator from './Navigator'

const store = createStore(reducers, applyMiddleware(thunk))

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
  }
}
