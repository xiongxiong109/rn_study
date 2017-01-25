// 动画相关
import React, {Component} from 'react';
import {
	Animated,
	Easing,
} from 'react-native';

import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import commonStyle from '../../styles/common';

class Animate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scaleValue: new Animated.Value(1),
			moveValue: new Animated.Value(0),
			rotateValue: new Animated.Value(0)
		}
	}
	render() {
		return (
			<View>
				<Text>Animate动画相关</Text>
				<TouchableOpacity onPress={() => {this.props.navigator.pop()}}>
					<Text style={commonStyle.appBtn}>back</Text>
				</TouchableOpacity>
				<View style={{flexDirection: 'row'}}>
					<Animated.Image
						source={require('../../imgs/bar.png')}
						style={
							{
								flex: 1,
								height: 150,
								transform: [
									{scale: this.state.scaleValue},
									{translateX: this.state.moveValue},
									{rotate: this.state.rotateValue.interpolate({
										// 插值函数interpolate, 实现数值与单位的映射
										inputRange: [0, 1],
										outputRange: ['0deg', '360deg']
									})}
								]
							}
						}/>
				</View>
				<TouchableOpacity onPress={() => {this.goScale()}}>
					<Text style={commonStyle.appBtn}>缩放spring</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {this.goMove()}}>
					<Text style={commonStyle.appBtn}>位移decay</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {this.goRotate()}}>
					<Text style={commonStyle.appBtn}>旋转timing</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {this.goAnimate()}}>
					<Text style={commonStyle.appBtn}>组合动画</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {this.goReset()}}>
					<Text style={commonStyle.appBtn}>还原</Text>
				</TouchableOpacity>
			</View>
		)
	}
	goScale() {
		let scale = Math.max(0.1, Math.random());
		// 这是一个bounce弹性动画
		Animated.spring(
			this.state.scaleValue,
			{
				toValue: scale,
				friction: 6
			}
		).start();
	}
	goMove() {
		let move = -1 * (Math.random() - .5);
		// 这是一个随初速度递减的动画,根据物理原理, 只要元素在某一个方向上有了初速度,
		// 物体就会发生位移
		Animated.decay(
			this.state.moveValue,
			{
				velocity: move // 定义初始速度
			}
		).start();
	}
	goRotate() {
		Animated.timing(this.state.rotateValue, {
			toValue: Math.random(),
			duration: 500,
			easing: Easing.bounce
		}).start();
	}
	// 动画依次执行sequence或同时执行parallel
	goAnimate() {
		let scale = Math.max(0.1, Math.random());
		let move = -1 * (Math.random() - .5);
		Animated.sequence([
			Animated.spring(
				this.state.scaleValue,
				{
					toValue: scale,
					friction: 6
				}
			),
			Animated.decay(
				this.state.moveValue,
				{
					velocity: move // 定义初始速度
				}
			),
			Animated.timing(this.state.rotateValue, {
				toValue: Math.random(),
				duration: 500,
				easing: Easing.bounce
			})
		]).start()
	}
	goReset() {
		Animated.parallel([
			Animated.spring(
				this.state.scaleValue,
				{
					toValue: 1,
					friction: 6
				}
			),
			Animated.timing(
				this.state.moveValue,
				{
					toValue: 0 // 定义初始速度
				}
			),
			Animated.timing(this.state.rotateValue, {
				toValue: 0,
				duration: 500,
				easing: Easing.linear
			})
		]).start()
	}
}

export default Animate