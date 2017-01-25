// app header
import React, {Component, PropTypes} from 'react';
import {
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
	Navigator
} from 'react-native';

class AppHeader extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.navContainer}>
				<TouchableOpacity onPress={() => this.evt_back()}>
					<Text>返回</Text>
				</TouchableOpacity>
				<Text style={styles.navBar}>{this.props.title}</Text>
				<Text>menu</Text>
			</View>
		)	
	}
	evt_back() {
		let {navigator} = this.props;
		if (navigator) {
			navigator.pop();
		}
	}
}

AppHeader.defaultProps = {
	title: 'Ctrip'
}

// 在组件中使用StyleSheet创建组件的样式
// 在react native中, 并不是所有的样式属性都适合所有的组件, 有的属性只适用于特定的组件
// rn中的flexDirection的默认值是column, 不是row
const styles = StyleSheet.create({
	navContainer: {
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10,
		height: 40,
		backgroundColor: '#0065cd'
	},
	navBar: {
		color: '#ccc',
		// flex: 1,
		textAlign: 'center'
	}
});

export default AppHeader;