// 触控系统
import React, {Component} from 'react';
import {
	View,
	Text,
	PanResponder,
	ScrollView,
	StyleSheet
} from 'react-native';
import AppHeader from '../../components/app.header';

class Touchable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: {},
			x: 0,
			y: 0
		}
	}
	componentWillMount() {
			this._panResponder = PanResponder.create({
		      // 要求成为响应者：
		      onStartShouldSetPanResponder: (evt, gestureState) => true,
		      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
		      onMoveShouldSetPanResponder: (evt, gestureState) => true,
		      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

		      onPanResponderGrant: (evt, gestureState) => {
		        // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！

		        // gestureState.{x,y}0 现在会被设置为0
		      },
		      onPanResponderMove: (evt, gestureState) => {
		        // 最近一次的移动距离为gestureState.move{X,Y}
		        this.setState({
		        	x: gestureState.moveX,
		        	y: gestureState.moveY
		        });
		        // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
		      },
		      onPanResponderTerminationRequest: (evt, gestureState) => true,
		      onPanResponderRelease: (evt, gestureState) => {
		        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
		        // 一般来说这意味着一个手势操作已经成功完成。
		      },
		      onPanResponderTerminate: (evt, gestureState) => {
		        // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
		      },
		      onShouldBlockNativeResponder: (evt, gestureState) => {
		        // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
		        // 默认返回true。目前暂时只支持android。
		        return true;
		      }
		    });
	}
	render() {
		return (
			<View>
				<AppHeader {...this.props}/>
				<View {...this._panResponder.panHandlers}>
					<Text>Hello World</Text>
					<ScrollView style={styles.infoContainer}>
						<Text>x: {this.state.x}</Text>
						<Text>y: {this.state.y}</Text>
					</ScrollView>
				</View>
			</View>
		)
	}
	doTouchRes(e) {
		this.setState({
			info: e
		})
	}
}

const styles = StyleSheet.create({
	infoContainer: {
		margin: 10,
		padding: 8,
		borderBottomWidth: 1,
		borderBottomColor: '#000',
		height: 180
	}
});

export default Touchable;