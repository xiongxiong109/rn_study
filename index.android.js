/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import AppHeader from './src/components/app.header';
import AppContainer from './src/components/app.container';
import SearchMovie from './src/example/search.movie';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HelloProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '电影搜索',
      content: ''
    }
  }
  render() {
    return (
      <View style={styles.main}>
        <SearchMovie style={styles.main}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

// 这里的注册是注册的应用, 而不是注册的react的组件, 应用中的组件只需要在应用中import 即可, 而不需要每次都import
AppRegistry.registerComponent('HelloProject', () => HelloProject);
