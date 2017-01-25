// 公共样式, 这个公共样式只能设计navigator容器的样式
import {
	StyleSheet
} from 'react-native';

const commonStyle = StyleSheet.create({
	appContainer: {
		backgroundColor: '#cdcdcd'
	},
	appBtn: {
		backgroundColor: '#000',
		color: '#fff',
		fontSize: 16,
		padding: 10,
		textAlign: 'center',
		marginBottom: 5
	}
});

export default commonStyle;