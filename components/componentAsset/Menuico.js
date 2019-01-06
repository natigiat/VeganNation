'use strict'
import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Text, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation';
const { width, height } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/FontAwesome'



class MenuIco extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={[styles.sideMenu]}>

                <View style={{ paddingHorizontal: 30 }}>
                    {this._renderHeader()}
                    <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Map')}>
                        <Icon name='globe' color={'#fff'} size={24} />
                        <Text style={styles.menuText} >Map</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Map')}>
                        <Icon name='globe' color={'#fff'} size={24} />
                        <Text style={styles.menuText} >Map</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Settings')}>
                        <Icon name='store' color={'#fff'} size={24} />
                        <Text style={styles.menuText} >Businesses</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Notifications')}>
                        <Icon name='user-o' color={'#fff'} size={24} />
                        <Text style={styles.menuText} >Ammbesadors</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Buyvcn')}>
                        <Icon name='circle-o' color={'#fff'} size={24} />
                        <Text style={styles.menuText} >By Vcn</Text>
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
                        <Text >Learn about VeganNation ICO and Vegan Coin </Text>
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
        backgroundColor: '#31c58d',

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
        color: '#fff'
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

export default withNavigation(MenuIco);