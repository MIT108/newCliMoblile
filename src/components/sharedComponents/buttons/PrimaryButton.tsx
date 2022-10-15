import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
  text: string,
  handleClick: any,
  color: any,
}

const PrimaryButton: React.FC<Props> = ({ text, handleClick, color }: Props) =>{
  return (
    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: color}]} onPress={() => { handleClick(text)}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonContainer: {
    height: 54,
    width: '100%',
    textAlign: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    alignItems: 'center',
    color: 'white'
  }
})