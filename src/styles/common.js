// 公共样式, 这个公共样式只能设计navigator容器的样式
import {
	StyleSheet,
	PixelRatio
} from 'react-native';

const commonStyle = StyleSheet.create({
	appContainer: {
		backgroundColor: '#cdcdcd'
	},
	appBtn: {
		backgroundColor: 'rgba(0,0,0,.5)',
		borderBottomColor: '#c00',
		// borderBottomWidth: 1, // 可以使用PixelRatio获取物理像素
		borderBottomWidth: 1 / PixelRatio.get(), // 从而得到真正的1px边框
		color: '#fff',
		fontSize: 16,
		padding: 10,
		textAlign: 'center',
		marginBottom: 5
	}
});

export default commonStyle;