import { Animated, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const getRandomMessage = () => {
  const number = Math.trunc(Math.random() * 100000);
  console.log(number)
  return 'Random message ' + number;
}

const Message = (props) => {
const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.delay(2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      })
    ]).start();
  })
  return (
    <Animated.View style={{
          opacity,
          transform: [
            {
              translateY: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0]
              })
            }
          ],
          margin: 10, 
          marginBottom: 5,
          backgroundColor: props.type,
          padding: 10,
          borderRadius: 4,
          shadowColor: props.type, 
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowOpacity: 0.15,
          shadowRadius: 5,
          elevation: 6,
          zIndex: 10000,
          justifyContent: 'center', alignItems: 'center'
          
        
     }}>
      <Text>{props.message}</Text>
    </Animated.View>
  )
}

const ToastNotification = ({message, type}) => {
  if (type === 'success') {
    type = 'green'
  }else if (type === 'warning'){
    type = 'yellow'
  }else if (type === 'error'){
    type = 'red'
  }
  return (
    <>
    <View
      style={{ 
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0
      }}>
      <Message message={message} type={type}/>
    </View>
    </>
  )
}

export default ToastNotification

const styles = StyleSheet.create({
})