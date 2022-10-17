/* eslint-disable prettier/prettier */
import React, { useState, useRef } from "react";
import { ScrollView, View } from "react-native";
import Message from "../../components/screens/chat/Message";
import ChatInput from "../../components/screens/chat/ChatInput";
import MessagesList from "../../components/screens/chat/MessagesList";


export default function GroupChatScreen({ onSwipeToReply }) {
    
	const [reply, setReply] = useState("");
	const [isLeft, setIsLeft] = useState();

	const swipeToReply = (message, isLeft) => {
		setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
		setIsLeft(isLeft);
	};

	const closeReply = () => {
		setReply("");
	};

    return (
		<View style={{ flex: 1 }}>
			<MessagesList onSwipeToReply={swipeToReply} />
			<ChatInput reply={reply} isLeft={isLeft} closeReply={closeReply} username={"username"} />
		</View>
	);
}