// 列表页
import React, {Component} from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';

class Home extends Component {
	render() {
		return (
			<View>
				<Text>list</Text>
				<TouchableOpacity onPress={() => {this.back()}}>
					<Text>Back</Text>
				</TouchableOpacity>
			</View>
		)
	}
	back() {
		let {navigator} = this.props;
		if (navigator) {
			navigator.pop();
		}
	}
}

export default Home