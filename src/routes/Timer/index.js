// Timer
import React, {Component} from 'react';
import {
	View,
	Text
} from 'react-native';
import AppHeader from '../../components/app.header';

class Timer extends Component {
	render() {
		return (
			<View>
				<AppHeader></AppHeader>
				<Text>定时器</Text>
			</View>
		)
	}
}

export default Timer;