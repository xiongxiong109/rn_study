// app header
import React, {Component, PropTypes} from 'react';
import {
	Text
} from 'react-native';

export class AppHeader extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Text>{this.props.title}</Text>
		)	
	}
}

AppHeader.defaultProps = {
	title: 'Ctrip'
}