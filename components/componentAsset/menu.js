'use strict'
import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Text, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation';
const { width, height } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/FontAwesome'



class Menu extends Component {
    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <View style={[styles.sideMenu]}>

                <View style={{ paddingHorizontal: 30 }}>
                    {this._renderHeader()}
                    <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Profile')}>
                        <Icon name='user-o' color={'#31c58d'} size={24} />
                        <Text style={styles.menuText} >Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Settings')}>
                        <Icon name='cog' color={'#31c58d'} size={24} />
                        <Text style={styles.menuText} >Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Notifications')}>
                        <Icon name='bell-o' color={'#31c58d'} size={24} />
                        <Text style={styles.menuText} >Notification</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('ContactUs')}>
                        <Icon name='globe' color={'#31c58d'} size={24} />
                        <Text style={styles.menuText} >contact us</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )



    }

    _renderHeader() {
        return (
            <View style={styles.header}>
                <View style={styles.userInfosHolder}>
                    <View style={styles.userInfos}>
                        <Text style={styles.username}>{global.userName}</Text>
                        <Text >View and edit profile</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sideMenu: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: width,
        height: height,
        backgroundColor: '#fff',

    },
    sideMenuTitle: {
        marginLeft: 20,
        marginBottom: 30
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    menuText: {
        marginLeft: 20,
        color: '#31c58d'
    },
    header: {
        marginTop: 20,
        marginBottom: 20
    },
    userInfosHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    userInfos: {
        height: 50,
        justifyContent: 'center'
    },
    username: {
        fontWeight: '700'
    }
})

export default withNavigation(Menu);