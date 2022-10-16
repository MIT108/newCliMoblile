/* eslint-disable prettier/prettier */
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../components'
import Conversations from '../../components/screens/chat/Conversations'
import SearchInput from '../../components/screens/chat/SearchInput'

export default function ConversationsScreen() {
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
			<Conversations>
				<SearchInput />
			</Conversations>
			<TouchableOpacity onPress={() => {}} style={fabStyles.style}>
				{/* <Icon name="chat" size={30} color={theme.colors.primary} /> */}
			</TouchableOpacity>
		</View>
    )
}

const fabStyles = StyleSheet.create({
    style: {
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: "white",
        borderRadius: 100,
        elevation: 5,
        shadowColor: Colors.PrimaryColorOne,
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2
        }
    }
})