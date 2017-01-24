// ListView的应用
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	Button,
	View,
	ListView
} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class AppList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataList: ds.cloneWithRows([])
		}
	}
	render() {
		return (
			<View style={styles.listView}>
				<Button
					title="click to fetch"
					onPress={() => {this.fetchData()}}
				/>
				<ListView
					dataSource={this.state.dataList}
					renderRow={
						(rowData) => (
							<View>
								<Text>电影名称:{rowData.title}</Text>
								<Text>总评:{rowData.collect_count}</Text>
							</View>
							)
					}
				/>
			</View>
		)
	}
	// 使用async 与 await语法来调用
	async fetchData() {
		// let _page = this;
		// // 调用fetch api 获取网络数据
		// fetch('https://api.douban.com/v2/movie/search?q=%E9%AC%BC%E5%90%B9%E7%81%AF')
		// .then(res => res.json())
		// .then(data => {
		// 	_page.setState({
		// 		dataList: ds.cloneWithRows(data.subjects)
		// 	});
		// })
		// .catch(e => alert(e))
		try {
			let res = await fetch('https://api.douban.com/v2/movie/search?q=%E9%AC%BC%E5%90%B9%E7%81%AF');
			let resJSON = await res.json();
			this.setState({
				dataList: ds.cloneWithRows(resJSON.subjects)
			})
		} catch(e) {
			alert(e);
		}
	}
}

const styles = StyleSheet.create({
	listView: {
		flexDirection: 'row',
		width: 320,
		height: 150,
		backgroundColor: 'rgba(0,0,0,.5)',
		padding: 20
	}
});

export default AppList;