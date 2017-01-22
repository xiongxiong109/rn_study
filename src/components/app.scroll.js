// scrollView
import React, {Component} from 'react';
import {
	ScrollView,
	Text
} from 'react-native';

class AppScroll extends Component {

	render() {
		return (
			<ScrollView style={{
			  paddingLeft: 50,
			  paddingRight: 50
			}}>
			  {(()=> {
			    let arr = [];
			    for (let i = 0; i< 50; i++) {
			      arr.push(<Text key={i}>123</Text>);
			    }
			    return arr;
			  })()}
			</ScrollView>
		)
	}

}

export default AppScroll;