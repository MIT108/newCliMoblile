/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'

import Icon from '../../icons';


const SearchInput = () => {
	return (
		<View style={styles.container}>
            <View style={styles.row}>
                <Image source={Icon.searchWhite} style={{ width: 20, height: 20 }} />
				<TextInput style={styles.input} placeholder="Search" maxLength={10} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		paddingHorizontal: 30
	},
	row: {
		backgroundColor: "gray",
		flexDirection: 'row',
		borderRadius: 5,
		height: 45,
		alignItems: 'center',
		paddingHorizontal: 10
	},
	input: {
		paddingHorizontal: 30,
		fontSize: 15,
		height: 45,
		flex: 1,
		color: "white"
	}
});

export default SearchInput