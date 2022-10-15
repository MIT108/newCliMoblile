/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Image, TouchableOpacity, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import bannerBGImage from '../../../../assets/images/course_default.jpg'
import infoIcon from '../../../../assets/Icons/info-circle.png'
import editIcon from '../../../../assets/Icons/edit.png'
import fullStartIcon from '../../../../assets/Icons/star.-1.png'
import emptyStartIcon from '../../../../assets/Icons/star.1.png'


const Course = ({navigation}) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 10 , marginBottom: 10}}>

        <View style={styles.card}>
            <ImageBackground blurRadius={5} source={bannerBGImage}  imageStyle={{ borderRadius: 15}} style={styles.banner}>
                <TouchableOpacity onPress={()=>{
                    navigation.push("SchoolDrawer")
                }}>
                    <Text style={styles.name}> React native crash course</Text>

                </TouchableOpacity>
            </ImageBackground>
            
            <View style={styles.body}>
                <View style={{ marginBottom: 30 }} >
                    <Text style={{ fontSize: 12 }}>Lorem ipsu unde, excepturi, facere reprehenderit. Rem maxime vitae repellendus odit. Quod, voluptate ipsum.</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity>
                            <Image style={styles.icon} source={infoIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.icon} source={fullStartIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.icon} source={editIcon} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center',  }}>
                        <Text style={{ color: 'black', fontSize: 10 }}>
                            Ranking:
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                            <Image  style={styles.icon3}  source={fullStartIcon} />
                            <Image  style={styles.icon3}  source={fullStartIcon} />
                            <Image  style={styles.icon3}  source={fullStartIcon} />
                            <Image  style={styles.icon3}  source={emptyStartIcon} />
                            <Image  style={styles.icon3}  source={emptyStartIcon} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
        
        
    </View>

  )
}

export default Course

const styles = StyleSheet.create({
    name:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        maxWidth: "50%",
        margin: 15
    },
    card: {
        width: "100%",
        borderRadius: 15, 
    },
    banner:{
        width: "100%",
        height: 150,
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        elevation: 8, 
        shadow: true, 
    },
    body: {
        width: "100%",
        padding: 15,  
        transform: [{ translateY: -20 }],
        backgroundColor: 'white' ,     
        zIndex: 10000,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        elevation: 2, 
        shadow: true, 
    },
    icon:{
        width: 20,
        height: 20,
        marginRight: 20
    },
    icon3:{
        margin: 2,
        width: 15,
        height: 15,
    }
    
})