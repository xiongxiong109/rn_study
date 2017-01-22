/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import AppHeader from './src/components/app.header';
import AppContainer from './src/components/app.container';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class HelloProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: ''
    }
  }
  render() {
    return (
      <View style={styles.main}>
        <AppHeader title="Hello World"></AppHeader>
        <AppContainer>
          <TextInput
            placeholder="please input sth"
            onChangeText={(v) => {this.updateTxt(v)}}
            style={styles.ipt}
          />
          <Text>{this.state.txt}</Text>
        </AppContainer>
      </View>
    );
  }
  updateTxt(txt) {
    this.setState({txt});
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  ipt: {
    width: 400,
    height: 40
  }
});

// 这里的注册是注册的应用, 而不是注册的react的组件, 应用中的组件只需要在应用中import 即可, 而不需要每次都import
AppRegistry.registerComponent('HelloProject', () => HelloProject);
