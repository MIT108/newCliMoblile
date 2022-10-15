import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Shadow } from 'react-native-shadow-2'
import { Colors } from '../../../sharedComponents'
import { setVariable } from '../../../../services/AsyncStorageMethods'

const List = ({heading, items, type, navigation}) => {
    return (
        <View>
            <View style={{ borderBottomWidth: 2, borderColor: Colors.PrimaryColorTwo, padding: 5 }}>
                <Text style={{ color: Colors.PrimaryColorTwo, fontWeight: '700', fontSize: 30 }}>{ heading }</Text>
            </View>
            <View>
            
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {items.map((item, index) =>(
                        <Item item={item} key={index} type={type} navigation={navigation} />
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}
const Item = ({item, type, navigation}) => {
    const selectAccount = (item) => {
        item.type = type
        setVariable(item, "usersAccount")
        navigation.push("DrawerNavigator")
    }
    return (
        <View style={{ margin: 10 }}>

            <Shadow
                distance={5}
                startColor={'#00000010'}
                containerViewStyle={{marginVertical: 30, marginHorizontal: 10}}
                radius={8}>
                <View style={[styles.container, styles.shadowProp]}>
                        
                    <View  style={{alignItems: 'center', justifyContent: 'center'}}>
                        
                        <Image source={require('../../../../assets/images//background.jpeg')} style={styles.story}/>
                        <Text style={{ color: Colors.PrimaryColorOne, marginVertical: 10 }}>
                        { item.school.name }
                        </Text>
                        <View>
                            <Pressable style={styles.button}
                                onPress={() => selectAccount(item)}
                            >
                                <Text style={{ color: "white" }}>Start</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Shadow>
        </View>

     )
 }

export default List

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderRadius: 10,
    },
    story: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.PrimaryColorOne
    },
    button: {
        backgroundColor: Colors.PrimaryColorTwo,
        maxWidth: 'auto',
        alignSelf: 'center',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5
    }

})
