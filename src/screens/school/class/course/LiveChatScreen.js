/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Filter = 'https://img.icons8.com/ios-glyphs/30/000000/sort-down.png'
const Archive = "https://img.icons8.com/external-bearicons-glyph-bearicons/64/ffffff/external-Archive-essential-collection-bearicons-glyph-bearicons.png"
const typing = "https://img.icons8.com/material-rounded/24/cacdcf/dots-loading--v1.png"
const seen = "https://img.icons8.com/ios-filled/50/0a88f0/double-tick.png"
const notSeen = "https://img.icons8.com/ios-filled/50/cacdcf/double-tick.png"


export const Chats = [{
  user: 'miendjemThierry',
  message: 'hello',
  date: '21:20',
  status: 0,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'ndaboseDaniel',
  message: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0',
  date: '21:20',
  status: 2,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=1'
}, {
  user: 'ndounePeet',
  message: 'hello',
  date: '21:20',
  status: 0,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'nsiniFranc',
  message: 'hello',
  date: '21:20',
  status: 3,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'maxLilian',
  message: 'hello',
  date: '21:20',
  status: 1,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'tasseJunior',
  message: 'hello',
  date: '21:20',
  status: 1,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'miendjemThierry',
  message: 'hello',
  date: '21:20',
  status: 1,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'ndaboseDaniel',
  message: 'hello',
  date: '21:20',
  status: 1,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=1'
}, {
  user: 'ndounePeet',
  message: 'hello',
  date: '21:20',
  status: 1,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'nsiniFranc',
  message: 'hello',
  date: '21:20',
  status: 1,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
},{
  user: 'miendjemThierry',
  message: 'hello',
  date: '21:20',
  status: 0,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'ndaboseDaniel',
  message: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0',
  date: '21:20',
  status: 2,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=1'
}, {
  user: 'ndounePeet',
  message: 'hello',
  date: '21:20',
  status: 0,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'nsiniFranc',
  message: 'hello',
  date: '21:20',
  status: 3,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'maxLilian',
  message: 'hello',
  date: '21:20',
  status: 1,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'tasseJunior',
  message: 'hello',
  date: '21:20',
  status: 1,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'miendjemThierry',
  message: 'hello',
  date: '21:20',
  status: 1,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'ndaboseDaniel',
  message: 'hello',
  date: '21:20',
  status: 1,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=1'
}, {
  user: 'ndounePeet',
  message: 'hello',
  date: '21:20',
  status: 1,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'nsiniFranc',
  message: 'hello',
  date: '21:20',
  status: 1,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'maxLilian',
  message: 'hello',
  date: '21:20',
  status: 1,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
  user: 'Last name',
  message: 'hello',
  date: '21:20',
  status: 1,
  image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}]


const LiveChatScreen = () => {
  return (
    <View>
      <View>
          <ScrollView style={{ marginHorizontal: 10, }}>
              {Chats.map((chat, index) => (
                  <ResentChat key={index} chat={chat} />
              ))}
              <View style={{ marginBottom: 100  }}>

              </View>
              
          </ScrollView>
      </View>
    </View>
  )
}



const ResentChat = ({ chat }) => {
  return (
      <TouchableOpacity style={styles.chatContainer}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
              <View>
                  <Image source={{ uri: chat.image }} style={styles.chatImage} />
              </View>
              <View style={{ flex: 1, paddingHorizontal: 10 }}>
                  <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 15, fontWeight: 'bold' }}>{chat.user}</Text>
                  <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 13, color: '#cacdcf' }}>{chat.message}</Text>
              </View>
              <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                  <Text style={{ fontSize: 13, color: '#cacdcf' }}>{chat.date}</Text>
              </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#cacdcf' }} />
          </View>
      </TouchableOpacity>
  )
}

export default LiveChatScreen

const styles = StyleSheet.create({
  
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  chatContainer: {
      paddingTop: 15
  }
})