// 首页
import React, {Component} from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import routes from '../index';

class Home extends Component {
	render() {
		return (
			<View>
				<Text>Home</Text>
				<TouchableOpacity onPress={() => {this.goList()}}>
					<Text>查询</Text>
				</TouchableOpacity>
			</View>
		)
	}
	goList() {
		let {navigator} = this.props;
		if (navigator) {
			// 跳转到列表页
			navigator.push(routes.map.listRoute);
		}
	}
}

export default Home