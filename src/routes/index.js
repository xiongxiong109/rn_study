// 路由配置

// 首页
import Home from './Home';
// 列表页
import List from './List';
// animate
import Animate from './Animate';
import Timer from './Timer';
import {Navigator} from 'react-native';

const routes = {
	// 配置路由动画
	config(route) {
		if (route.type == 'plugin') { // 让插件从下方弹出
			return Navigator.SceneConfigs.FloatFromBottom;
		} // 让页面左右切换
		return Navigator.SceneConfigs.PushFromRight ;
	},
	// 路由mapping
	map: {
		defaultRoute: {
			name: 'Home',
			type: 'page',
			component: Home
		},
		ListRoute: {
			name: 'List',
			type: 'page',
			component: List
		},
		AnimateRoute: {
			name: 'Animate',
			type: 'page',
			component: Animate
		},
		TimerRoute: {
			name: 'Timer',
			type: 'page',
			component: Timer
		}
	}
}

export default routes;