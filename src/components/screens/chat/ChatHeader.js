/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import icons from "../../icons";
import { Colors } from "../../sharedComponents";


const ChatHeader = ({ username, bio, picture, onlineStatus, onPress }) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.backButton} onPress={onPress}>
				<Image source={icons.phone} style={{ height: 10, width: 10 }} />
			</TouchableOpacity>
			<View style={styles.profileOptions}>
				<TouchableOpacity style={styles.profile}>
					<Image style={styles.image} source={{ uri: picture }} />
					<View style={styles.usernameAndOnlineStatus}>
						<Text style={styles.username}>{username}</Text>
						<Text style={styles.onlineStatus}>{onlineStatus}</Text>
					</View>
				</TouchableOpacity>
				<View style={styles.options}>
					<TouchableOpacity
						onPress={() => navigation.navigate("OnCallScreen", {
							username: username,
							picture: picture
						})}
						style={{ paddingHorizontal: 5 }}
					>
						<Image source={icons.phone} style={{ height: 10, width: 10 }} />
					</TouchableOpacity>
					<TouchableOpacity style={{ paddingHorizontal: 20 }}>
						<Image source={icons.phone} style={{ height: 10, width: 10 }} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: Colors.PrimaryColorOne,
		paddingTop: 10,
		paddingBottom: 10,
	},
	backButton: {
		alignSelf: "center",
		paddingHorizontal: 10,
	},
	profileOptions: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	profile: {
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#fff",
		flex: 4,
	},
	image: {
		height: 50,
		width: 50,
		borderRadius: 32.5,
	},
	usernameAndOnlineStatus: {
		flexDirection: "column",
		justifyContent: "center",
		paddingHorizontal: 10,
	},
	username: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	onlineStatus: {
		color: "white",
		fontSize: 10,
	},
	options: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
});

export default ChatHeader;
