import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated } from 'react-native'
import React, { Component } from 'react'
import { PrimaryColorOne } from '../../../../sharedComponents'
import Icon from 'react-native-vector-icons/Ionicons'


const Filter = 'https://img.icons8.com/ios-glyphs/30/000000/sort-down.png'
const Archive = "https://img.icons8.com/external-bearicons-glyph-bearicons/64/ffffff/external-Archive-essential-collection-bearicons-glyph-bearicons.png"
const typing = "https://img.icons8.com/material-rounded/24/cacdcf/dots-loading--v1.png"
const seen = "https://img.icons8.com/ios-filled/50/0a88f0/double-tick.png"
const notSeen = "https://img.icons8.com/ios-filled/50/cacdcf/double-tick.png"



export const CONTACTS = [{
    user: 'miendjemThierry',
    image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
    user: 'ndaboseDaniel',
    image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=1'
}, {
    user: 'ndounePeet',
    image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
    user: 'nsiniFranc',
    image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
    user: 'maxLilian',
    image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
    user: 'tasseJunior',
    image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}]


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


let CONTACT_MAX_HEIGHT = 130
let CONTACT_MIN_HEIGHT = 0
let SEARCH_MAX_HEIGHT = 65
let SEARCH_MIN_HEIGHT = 0

class ResentMsg extends Component {
    constructor(props: any) {
        super(props)
        this.state = {
            scrollY: new Animated.Value(0)
        }
    }
    render() {

        const searchHeight = this.state.scrollY.interpolate({
            inputRange: [0, SEARCH_MAX_HEIGHT - SEARCH_MIN_HEIGHT],
            outputRange: [SEARCH_MAX_HEIGHT, SEARCH_MIN_HEIGHT],
            extrapolate: 'clamp'
        })

        
        const contactHeight = this.state.scrollY.interpolate({
            inputRange: [0, CONTACT_MAX_HEIGHT - CONTACT_MIN_HEIGHT],
            outputRange: [CONTACT_MAX_HEIGHT, CONTACT_MIN_HEIGHT],
            extrapolate: 'clamp'
        })

        return (
            <View>
                <View style={{ backgroundColor: '#f2f4f5', paddingBottom: 20 }}>
                    {/* search section */}

                    <Animated.View style={[styles.wrapper, {height: SEARCH_MAX_HEIGHT, zIndex: 1000}]}>
                        <Search />
                    </Animated.View>

                    {/* contact section  */}
                    <Animated.View style={{ height: contactHeight }}>
                        <View style={{ paddingHorizontal: 20 }}>
                            <View>
                                <Top />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        {CONTACTS.map((contact, index) => (
                                            <Contact key={index} contact={contact} />
                                        ))}
                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                    </Animated.View>
                </View>

                {/* resent chat section  */}
                <View style={styles.container}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: '45%' }}>
                        <View style={{ flex: 1, height: 3, backgroundColor: '#cacdcf' }} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>

                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', marginRight: 10 }}>Filter by</Text>
                            <Image source={{ uri: Filter }} style={{ width: 25, height: 25 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20 }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Recent Chat
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.archiveButton}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', marginRight: 10, color: 'white' }}>
                                    Archived
                                </Text>
                                <Image source={{ uri: Archive }} style={{ width: 20, height: 20 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <ScrollView
                            scrollEventThrottle={16}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                                {useNativeDriver: false}
                            )}
                            style={{ marginBottom: 350 }}
                        >
                            {Chats.map((chat, index) => (
                                <ResentChat key={index} chat={chat} />
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}

const Search = () => {
    return(

        <View style={styles.searchWrapper}>
        <TextInput
            placeholderTextColor="#444"
            placeholder="Search"
            fontSize={17}
            textColor="black"
            fontWeight="bold"
            style={styles.textInput}
        />
        <TouchableOpacity
            onPress={() => {
                Alert.alert("searching...")
            }}
        >
            <Icon
                name="search"
                color="#07338C"
                size={35}
            />

        </TouchableOpacity>
    </View>
    )
}


const Top = () => (
    <View style={styles.top}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Favorites</Text>
    </View>
)


const Contact = ({ contact }: any) => (
    <TouchableOpacity style={styles.contacts}>
        <Image source={{ uri: contact.image }} style={styles.contactImage} />
        <Text style={{ color: 'black' }}>{
            contact.user.length > 9 ? contact.user.slice(0, 7).toLocaleLowerCase() + '...' : contact.user.toLocaleLowerCase()
        }</Text>
    </TouchableOpacity>
)

const ResentChat = ({ chat }: any) => {
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
                    {
                        chat.status == 0 ?
                            <>
                            </> : chat.status == 1 ?
                            <>
                                <Image source={{ uri: typing }} style={{ width: 20, height: 20 }} />
                            </>
                            : chat.status == 2 ?
                            <>
                                <Image source={{ uri: notSeen }} style={{ width: 20, height: 20 }} />
                            </>
                            :
                            <>
                                <Image source={{ uri: seen }} style={{ width: 20, height: 20 }} />
                            </>
                    }
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#cacdcf' }} />
            </View>
        </TouchableOpacity>
    )
}

export default ResentMsg

const styles = StyleSheet.create({

    wrapper: {
        padding: 10,
    },
    searchWrapper: {
        width: "100%",
        backgroundColor: 'white',
        zIndex: 10000,
        borderRadius: 15,
        elevation: 5,
        shadow: true,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    textInput: {
        flex: 1,
        color: 'black',
    },

    top: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5
    },
    addContact: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: "#07338C",
        justifyContent: 'center',
        alignItems: 'center',
    },
    contacts: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    contactImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
        resizeMode: 'contain',
    },
    container: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
        height: '100%',
        padding: 20,
    },
    archiveButton: {
        backgroundColor: PrimaryColorOne,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 120,
        padding: 5,
        paddingHorizontal: 15
    },
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