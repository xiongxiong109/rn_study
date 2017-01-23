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
					title="click"
					onPress={() => {this.fetchData()}}
				/>
				<ListView
					dataSource={this.state.dataList}
					renderRow={
						(rowData) => (
							<View>
								<Text>姓名:{rowData.nm}</Text>
								<Text>年龄:{rowData.age}</Text>
							</View>
							)
					}
				/>
			</View>
		)
	}
	fetchData() {
		let _page = this;
		// 调用fetch api 获取网络数据
		fetch('http://192.168.1.104:3000/apis/userList', {
			method: 'POST',
			headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    firstParam: 'yourValue',
		    secondParam: 'yourOtherValue',
		  })
		})
		.then(res => res.json())
		.then(data => {
			_page.setState({
				dataList: ds.cloneWithRows(data.list)
			});
		})
		.catch(e => alert(e))
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