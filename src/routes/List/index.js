// 列表页
import React, {Component} from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import commonStyle from '../../styles/common';

class Home extends Component {
	render() {
		return (
			<View>
				<Text>手势响应系统</Text>
				<TouchableOpacity onPress={() => {this.evt_back()}}>
					<Text style={commonStyle.appBtn}>Back</Text>
				</TouchableOpacity>
				<TouchableOpacity onLongPress={this.evt_long}>
					<Text style={commonStyle.appBtn}>长按事件</Text>
				</TouchableOpacity>
			</View>
		)
	}
	evt_back() {
		let {navigator} = this.props;
		if (navigator) {
			navigator.pop();
		}
	}
	evt_long() {
		alert('long press');
	}
}

export default Home