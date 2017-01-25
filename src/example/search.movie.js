// 豆瓣电影搜索app
import React, {Component} from 'react';
import {
	View,
	Text,
	TextInput,
	Image,
	StyleSheet,
	Button,
	ListView
} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class SearchMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchV: '',
			rstList: ds.cloneWithRows([])
		}
	}
	render() {
		return (
			<View style={{width: 320}}>
				<View style={styles.searchContainer}>
					<TextInput
						style={styles.searchIpt}
						onChangeText={(v) => {this.setSearchV(v)}}
						placeholder="请输入搜索内容" />
				</View>
				<View>
					<Text>{this.state.searchV}</Text>
				</View>
				<View>
					<Button title="搜索" onPress={() => {this.searchMovie()}}></Button>
				</View>
				<View>
					<ListView
						style={{
							height: 150
						}}
						dataSource={this.state.rstList}
						renderRow={(rowData) => {
							return <Text>{rowData.title}</Text>
					}}/>
				</View>
			</View>
		)
	}
	setSearchV(v) {
		this.setState({
			searchV: v
		});
	}
	async searchMovie() {
		let url = `https://api.douban.com/v2/movie/search?q=${this.state.searchV}`;
		let res = await fetch(url);
		let resJSON = await res.json();
		this.setState({
			rstList: ds.cloneWithRows(resJSON.subjects)
		})
	}
}

const styles = StyleSheet.create({
	searchContainer: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		height: 40,
		backgroundColor: 'rgba(125,125,125,.5)'
	},
	searchIpt: {
		color: '#c00',
		flex: 1,
		textAlign: 'center'
	}
})

export default SearchMovie;