// ListView的应用
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ListView
} from 'react-native';

class AppList extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataList: ds.cloneWithRows([
				{nm: 'LL', age: 25},
				{nm: 'aas', age: 23},
				{nm: 'dasd', age: 21},
				{nm: 'sdf', age: 18},
				{nm: 'LrwerL', age: 23},
				{nm: 'weqwe', age: 11}
			])
		}
	}
	render() {
		return (
			<View style={styles.listView}>
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