// app header
import React, {Component, PropTypes} from 'react';
import {
	Text,
	StyleSheet,
	View,
} from 'react-native';

class AppHeader extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.navContainer}>
				<Text style={styles.navBar}>{this.props.title}</Text>
			</View>
		)	
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
		justifyContent: 'center',
		flexDirection: 'row',
		height: 40,
		backgroundColor: 'rgba(125,125,125,.5)'
	},
	navBar: {
		color: '#c00',
		flex: 1,
		textAlign: 'center',
		backgroundColor: '#dd0'
	}
});

export default AppHeader;