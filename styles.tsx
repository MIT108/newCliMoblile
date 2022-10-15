import { Dimensions, StyleSheet } from 'react-native';

const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default StyleSheet.create({
  max: {
      backgroundColor: "white",
    flex: 1,
  },
  buttonHolder: {
      top: 600,
    position: 'absolute',
    alignItems: 'center',
    flex: 1,
    padding: 30,
    width: dimensions.width,
  },
  buttonText: {
    color: '#000',
  },
  videoStat:{
    top: 300,
    width: dimensions.width,
    textAlign: 'center',
    fontFamily: 'Poppins-Light'
  },
  fullView: {
    width: dimensions.width,
    height: dimensions.height - 100,
  },
  remoteContainer: {
    width: '100%',
    height: 150,
    position: 'absolute',
    top: 5,
  },
  remote: {
    width: 150,
    height: 150,
    marginHorizontal: 2.5,
  },
  noUserText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#0093E9',
  },
  request: {
    width: 200,
    left: 150  
  },
  loginText: {
      fontFamily: 'Poppins-Light'
  },
  login:{
      top: 35
  },
  endbtn:{
    alignItems: 'center',
    width: 100,
    left: 250,
    bottom: 30
  }
});
