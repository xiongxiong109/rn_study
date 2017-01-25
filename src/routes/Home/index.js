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

class Home extends Component {
	render() {
		return (
			<View>
				<View style={styles.bannerContainer}>
					<Image 
					source={require('../../imgs/bar.png')}
					style={styles.banner}
					>
						<TouchableOpacity onPress={() => {this.goList()}}>
							<Text>查询</Text>
						</TouchableOpacity>
					</Image>
				</View>
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