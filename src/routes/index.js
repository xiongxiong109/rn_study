// 路由配置

// 首页
import Home from './Home';
// 列表页
import List from './List';
// booking
import Animate from './Animate';
// 详情页
import Detail from './Detail';

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
		listRoute: {
			name: 'List',
			type: 'page',
			component: List
		},
		aniRoute: {
			name: 'Animate',
			type: 'page',
			component: Animate
		}
	}
}

export default routes;