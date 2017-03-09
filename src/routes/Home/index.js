// 首页
import React, {Component} from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import routes from '../index';

import commonStyle from '../../styles/common';

class Home extends Component {
	render() {
		return (
			<View>
				<View style={styles.bannerContainer}>
					<Image 
					source={require('../../imgs/bar.png')}
					style={styles.banner}
					/>
				</View>
				<TouchableOpacity onPress={() => {this.go('List')}}>
					<Text style={commonStyle.appBtn}>手势事件</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {this.go('Animate')}}>
					<Text style={commonStyle.appBtn}>动画相关</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {this.go('Touchable')}}>
					<Text style={commonStyle.appBtn}>手势响应系统</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {this.go('Layout')}}>
					<Text style={commonStyle.appBtn}>布局相关</Text>
				</TouchableOpacity>
			</View>
		)
	}
	go(path) {
		let {navigator} = this.props;
		if (navigator) {
			// 跳转到列表页
			navigator.push(routes.map[`${path}Route`]);
		}
	}
	// goAnimate() {
	// 	let {navigator} = this.props;
	// 	if (navigator) {
	// 		// 跳转到列表页
	// 		navigator.push(routes.map.aniRoute);
	// 	}
	// }
}

const styles = StyleSheet.create({
	bannerContainer: {
		flexDirection: 'row',
		height: 150
	},
	banner: {
		flex: 1,
		height: 150
	}
});

export default Home