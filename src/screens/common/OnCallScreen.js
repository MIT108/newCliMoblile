/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProfilePicture from '../../components/screens/chat/ProfilePicture';
import OptionButtons from '../../components/screens/chat/OptionButtons';
import { Colors } from '../../components';

const OnCallScreen = ({ navigation, route }) => {
	const { username, picture } = route.params;
	const [speakerOn, setSpeakerOn] = useState(false);
	const [isMuted, setIsMuted] = useState(false);

	return (
		<View style={{ backgroundColor: Colors.PrimaryColorOne, flex: 1 }}>
			<View style={styles.profileContainer}>
				<View style={styles.usernameAndTime}>
					<Text style={styles.username}>{username}</Text>
					<Text style={styles.time}>00:45</Text>
				</View>
				<ProfilePicture picture={picture} />
			</View>
			<View style={styles.optionsContainer}>
				<OptionButtons 
					onPress={() => setIsMuted(value => !value)}
					name="microphone-slash"
					size={60}
					color={isMuted ? Colors.SecondaryColorOne : Colors.SecondaryColorTwo}
				/>
				<OptionButtons 
					onPress={() => setSpeakerOn(value => !value)}
					name="volume-up"
					size={60}
					color={speakerOn ? Colors.PrimaryColorOne : Colors.PrimaryColorTwo}
				/>
			</View>
			<View style={styles.endCallContainer}>
				<OptionButtons 
					onPress={() => navigation.goBack()}
					name="phone"
					size={60}
					color="red"
				/>
			</View>
		</View>
	)
};

const styles = StyleSheet.create({
	profileContainer: {
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingBottom: 50
	},
	usernameAndTime: {
		paddingVertical: 50,
		alignItems: 'center'
	},
	username: {
		fontSize: 20,
		color: "white"
	},
	time: {
		fontSize: 15,
		color: "gray"
	},
	optionsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingHorizontal: 50,
		paddingBottom: 90
	},
	endCallContainer: {
		alignItems: 'center'
	}
})

export default OnCallScreen