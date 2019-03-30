import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    Provider,
    connect
} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Navigator from './Navigator'

export default class App extends React.Component {
  render() {
    return (
        //<Provider>
            <Navigator />
        //</Provider>
    );
  }
}
