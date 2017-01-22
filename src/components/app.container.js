// app 容器
import React, {Component} from 'react';
import {
	Text,
	TextInput,
	View
} from 'react-native';

class AppContainer extends Component {
	render() {
		return (
			<View style={{flex: 1}}>{this.props.children}</View>
		)
	}
}

export default AppContainer;