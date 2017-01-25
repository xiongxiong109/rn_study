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
				<TouchableOpacity onPress={() => {this.goList()}}>
					<Text style={commonStyle.appBtn}>手势事件</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {this.goAnimate()}}>
					<Text style={commonStyle.appBtn}>动画相关</Text>
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
	goAnimate() {
		let {navigator} = this.props;
		if (navigator) {
			// 跳转到列表页
			navigator.push(routes.map.aniRoute);
		}
	}
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