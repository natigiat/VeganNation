import React, { Component } from 'react';
import { Animated, FlatList, TouchableHighlight, Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import MainOption from '../../../pages/optionPost/MainOption'




class Popular extends React.Component {
    constructor() {
        super();
        this.state = {
            showCancel: true,
            posts: [],
            index: null
        }

        let numColumns = 3;
    }



    componentWillMount() {
        fetch("http://68.183.209.228:3000/api/posts")
            .then(response => response.text())
            .then(JSON.parse)
            .then(posts => this.setState({ posts }));
    }


    render() {
        return (
            <FlatList
                data={this.state.posts}
                style={styles.box}
                extraData={this.state.posts}
                renderItem={this.renderItem}

                numColumns={this.numColumns}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }


    renderItem = ({ item, index }) => {
        var firstElemnt = this.checkIndexIsEven(index) ? 300 : 300

        return (


            <TouchableHighlight onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('Details', {
                    itemId: item.id,
                });
            }} style={[styles.boxWrapper, { height: firstElemnt }]}>

                <ImageBackground imageStyle={{ borderRadius: 5 }} source={{ uri: item.mainImage }} style={styles.box} >
                    <LinearGradient opacity={1} start={{ x: 0.5, y: 0 }} end={{ x: 0, y: 1 }} colors={['#222222ad', 'transparent', '#222222ad']} style={styles.linearGradient}>
                        <TouchableHighlight onPress={() => alert('2')} >
                            <Ionicons style={styles.action} name={'md-more'} color={"#fff"} />
                        </TouchableHighlight>
                        <Image
                            style={styles.profileImage}
                            source={require('../../../../assets/img/smallProof.png')}
                        />
                        {this.state.index == index ?
                            <View style={styles.btnPost}>
                                {this.state.showCancel ? <MainOption /> : null}
                            </View> : null}

                    </LinearGradient>
                </ImageBackground>
            </TouchableHighlight>
        )
    }


    checkIndexIsEven(n) {
        return n == 0;
    }

    openSetting(index) {

        if (index == this.state.index) {
            this.setState({
                showCancel: !this.state.showCancel,
                index: index
            })
        } else {
            this.setState({
                showCancel: true,
                index: index
            })
        }


    }
}




const styles = StyleSheet.create({
    boxWrapper: {
        flex: 1,
        flexDirection: 'column',
        height: 300,

        margin: 2,
        borderColor: '#fff',
        borderRadius: 25,
        borderWidth: 1,

    },
    box: {
        flex: 1,

    },

    item: {

    },
    btnPost: {},
    action: {
        position: "absolute", right: 10, top: 10,
        fontSize: 24,
    },
    profileImage: {
        top: 0,
        marginTop: 10,
        marginLeft: 10,
        borderColor: "#F16252",
        borderWidth: 2,
        borderRadius: 50
    },
    itemText: {
        color: '#ffffff',
        fontSize: 14,
        paddingRight: 10,
        paddingLeft: 10,

        position: "absolute", bottom: 60,
    },
    linearGradient: {
        flex: 1,
        borderRadius: 5
    },
})

export default withNavigation(Popular);