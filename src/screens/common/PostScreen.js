/* eslint-disable prettier/prettier */
import React from "react";
import { View, StyleSheet, Text } from "react-native";
// import { WebView } from 'react-native-webview'

const YOUTUBE = 'https://www.youtube.com/watch?v=yiZZeK-y6cI'
const GOOGLE = 'https://www.google.com/'
const VIDEO = "http://192.168.173.239/purejs/cidra-video-conference.html"

const PostScreen = () => {
  return (
    <View style={styles.center}>
      <View style={{ width: '100%', height: '100%' }}>
        {/* <WebView 
          source = {
            {
              uri: VIDEO
            }
          }
          onLoad={console.log('Loaded!')}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default PostScreen;