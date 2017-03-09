/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import routes from './src/routes';
import commonStyle from './src/styles/common';

export default class HelloProject extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navigator
          // 定义初始路由
          initialRoute={routes.map.defaultRoute}
          // 配置scene场景切换
          configureScene={routes.config}
          // 配置路由公共样式
          sceneStyle={commonStyle.appContainer}
          // 调用路由渲染函数, route传递的就是配置的路由的对象
          // navigator传递的就是navigator实例, 具有push、pop、jump等方法
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator}/>
          }}/>
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
