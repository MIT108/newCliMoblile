import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Icon from '../../components/icons';
import defaultStyles from '../../components/styles';
import {
  ClientRoleType,
  createAgoraRtcEngine,
  IRtcEngine,
  RtcSurfaceView,
  ChannelProfileType,
} from 'react-native-agora';

import requestCameraAndAudioPermission from '../../components/permission';

function makeid(length) {
  var result = '';
  var characters = '0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

const appId = '8c4bdb77e1e34d648117e673adc36e87';
const channelName = 'mit';
const token = '007eJxTYDB58ZXXSznzpvrZM5qVRX9STyqrF2xUuKXgG+61qUM+/5ECg0WySVJKkrl5qmGqsUmKmYmFoaF5qpm5cWJKsrFZqoW52D+v5JpARgaFKS9YGBkgEMRnZsjNLGFgAAD3fh5H';
const uid = parseInt(makeid(5));


const image = "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg"

export default function App() {

  const agoraEngineRef = useRef<IRtcEngine>(); // Agora engine instance
  const [isJoined, setIsJoined] = useState(false); // Indicates if the local user has joined the channel
  const [remoteUid, setRemoteUid] = useState(0); // Uid of the remote user
  const [message, setMessage] = useState(''); // Message to the user


  function showMessage(msg: string) {
    setMessage(msg);
  }
  useEffect(() => {
    // Initialize Agora engine when the app starts
    setupVideoSDKEngine();
  });

  const setupVideoSDKEngine = async () => {
    try {
      // use the helper function to get permissions
      await requestCameraAndAudioPermission();
      agoraEngineRef.current = createAgoraRtcEngine();
      const agoraEngine = agoraEngineRef.current;
      agoraEngine.registerEventHandler({
        onJoinChannelSuccess: () => {
          showMessage('Successfully joined the channel ' + channelName);
          setIsJoined(true);
        },
        onUserJoined: (_connection, Uid) => {
          showMessage('Remote user joined with uid ' + Uid);
          setRemoteUid(Uid);
        },
        onUserOffline: (_connection, Uid) => {
          showMessage('Remote user left the channel. uid: ' + Uid);
          setRemoteUid(0);
        },
      });
      agoraEngine.initialize({
        appId: appId,
      });
      agoraEngine.enableVideo();
    } catch (e) {
      console.log(e);
    }
  };

  const join = async () => {
    if (isJoined) {
      return;
    }
    try {

      agoraEngineRef.current?.setChannelProfile(
        ChannelProfileType.ChannelProfileCommunication,
      );
      agoraEngineRef.current?.startPreview();
      agoraEngineRef.current?.joinChannel(token, channelName, uid, {
        clientRoleType: ClientRoleType.ClientRoleBroadcaster,
      });

    } catch (e) {
      console.log(e);
    }
  };
  const leave = () => {
    try {
      agoraEngineRef.current?.leaveChannel();
      setRemoteUid(0);
      setIsJoined(false);
      showMessage('You left the channel');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <View style={styles.videoView}>

        {isJoined ? (
          <React.Fragment key={0}>
            <RtcSurfaceView canvas={{ uid: 0 }} style={styles.videoView} />
            <Text>Local user uid: {uid}</Text>
          </React.Fragment>
        ) : (
          <Text>Join a channel</Text>
        )}
        {/* <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} /> */}
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={defaultStyles.iconButton} onPress={join}  >
            <Image source={Icon.volume} style={defaultStyles.iconImage} />
          </TouchableOpacity>
          <View style={styles.time}>
            <Text style={{ color: 'white' }}>24:10</Text>
          </View>
          <TouchableOpacity onPress={leave} style={defaultStyles.iconButton}>
            <Image source={Icon.phone} style={defaultStyles.iconImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.otherActions}>
          <View>
            <View style={[defaultStyles.iconButton, {marginTop: 30}]}>
              <Image source={Icon.message} style={defaultStyles.iconImage} />
            </View>
            <View style={[defaultStyles.iconButton, {marginTop: 30}]}>
              <Image source={Icon.camera} style={defaultStyles.iconImage} />
            </View>
            <View style={[defaultStyles.iconButton, {marginTop: 30}]}>
              <Image source={Icon.video} style={defaultStyles.iconImage} />
            </View>
            <View style={[defaultStyles.iconButton, {marginTop: 30}]}>
              <Image source={Icon.microphone} style={defaultStyles.iconImage} />
            </View>
          </View>
        </View>
        <View style={styles.remoteUsers}>
          <ScrollView horizontal={true} >

            {isJoined && remoteUid !== 0 ? (
              <React.Fragment key={remoteUid}>
                <RtcSurfaceView
                  canvas={{ uid: remoteUid }}
                  style={styles.remoteImage}
                />
              </React.Fragment>
            ) : (
              <Text>Waiting for a remote user to join</Text>
            )}
            {/* <Image source={{ uri: image }} style={styles.remoteImage} /> */}
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  videoView: { width: '100%', height: '100%' },
  actionContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 20,
    zIndex: 1000,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 10,
  },
  otherActions: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  remoteUsers: {
    position: 'absolute',
    bottom: 20,
  },
  remoteImage: {
    width: 100,
    height: 100,
    marginLeft: 20,
    borderRadius: 10,
    marginBottom: 20

  }
})