/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const OptionButtons = ({ name, size, color, onPress }) => {
	return (
		<View>
			<TouchableOpacity onPress={onPress} style={[styles.iconContainer, {
				width: size,
				height: size,
				borderRadius: size/2,
				backgroundColor: color
			}]}>
				<Image source={name} style={{ width: 20, height: 20 }} />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	iconContainer: {
		backgroundColor: "red",
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default OptionButtons