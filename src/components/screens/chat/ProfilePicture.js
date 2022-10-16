/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const ProfilePicture = ({ picture }) => {
	return (
		<View>
			<Image style={styles.image} source={{ uri: picture }} />
		</View>
	)
}

const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 200,
		borderRadius: 100
	}
})

export default ProfilePicture