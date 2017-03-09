// 布局相关
import React, {Component} from 'react';
import {
	View,
	ScrollView,
	Text,
	Image,
	PixelRatio,
	Dimensions,
	StyleSheet
} from 'react-native';

export default class layout extends Component {
	render() {
		return (
			<View>
				<Text style={[styles.text]}>布局相关</Text>
				<ScrollView
					showsVerticalScrollIndicator={false}
				>
					<Text style={styles.text}>利用1 / PixelRatio.get(), 获得真正的一像素边框</Text>
					<Text style={styles.text}>flex布局</Text>
					<View style={[styles.block, styles.flxV, styles.flxH]}>
						<View style={[styles.circle]}></View>
					</View>
					<View style={[styles.block, styles.flxV]}>
						<View style={styles.imgContainer}>
							<Image
								style = {styles.imgItem}
								source={
								{uri: 'http://fph-81.oss-cn-hangzhou.aliyuncs.com/20170207/a8.png'}
							} />
						</View>
						<View style={styles.infoContainer}>
							<Text style={styles.infoTitle}>我是标题</Text>
							<Text
								style={styles.infoContent}
								numberOfLines={2}
							>我是内容我是容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</Text>
						</View>
					</View>
					<Text style={styles.text}>利用Dimensions获取屏幕宽高, 实现百分比布局</Text>
					<View style={styles.per30}></View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	// 文本样式
	text: {
		color: '#c00',
		backgroundColor: '#ddd',
		textAlign: 'center',
		padding: 10,
		marginBottom: 5,
		borderBottomColor: '#555',
		borderBottomWidth: 1 / PixelRatio.get()
	},
	// 块样式
	block: {
		minHeight: 80,
		marginBottom: 5,
		backgroundColor: '#000'
	},
	// circle
	circle: {
		width: 50,
		height: 50,
		backgroundColor: '#fff',
		borderRadius: 50
	},
	// 默认是column的flex
	flxV: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,.8)'
	},
	flxT: {
		alignItems: 'flex-start'
	},
	flxH: {
		justifyContent: 'center'
	},
	imgContainer: {
		width: 80,
		height: 80,
		margin: 10
		// backgroundColor: '#c00'
	},
	imgItem: {
		width: 80,
		height: 80
	},
	infoContainer: {
		flex: 1,
		justifyContent: 'center',
		marginRight: 10,
		padding: 4,
		// minHeight: 64,
		backgroundColor: '#5d5d0c'
	},
	infoTitle: {
		fontSize: 22,
		color: '#cdcdcd'
	},
	infoContent: {
		fontSize: 14,
		color: '#00cdcd'
	},
	per30: {
		width: Dimensions.get('window').width * .3,
		height: Dimensions.get('window').height * .8,
		backgroundColor: '#c00',
		marginBottom: 10
	}
});