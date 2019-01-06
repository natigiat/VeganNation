import React, { Component } from 'react';
import { Animated, FlatList, TouchableHighlight, Text, TouchableWithoutFeedback, View, StyleSheet, ImageBackground, Image, RefreshControl } from "react-native";
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import PropTypes from 'prop-types';
// import randomColor from 'randomcolor';
import MainOption from '../../../pages/optionPost/MainOption'
// import { CachedImage } from 'react-native-cached-image';




class All extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 0,
            showCancel: true,
            posts: [],
            index: null,
            refreshing: false,
        }

        this.onEndReachedCalledDuringMomentum = true;
        let numColumns = 3;
    }


    componentWillMount() {
        this.fetchData();
    }


    handleEnd = () => {
        console.log("page is " + this.state.page);
        console.log("data is " + this.state.posts);
        this.setState(state => ({ page: this.state.page + 1 }), () => this.fetchData());
    }

    _onRefresh = () => {
        this.setState({ refreshing: true });
        this.fetchData();
    }
    fetchData = async () => {

        fetch(`http://68.183.209.228:3000/api/posts/allcontent/${this.state.page}`)
            .then(response => response.text())
            .then(JSON.parse)
            .then(posts => this.setState(state => ({
                posts: [...state.posts, ...posts.result],
                loading: false
            })))
            .then(this.setState({ refreshing: false }));
    }


    displaycontentType(contentType) {

        if (contentType == "recipe") {
            return <LinearGradient colors={['#b3a31a', '#E9D632']} start={{ x: 0, y: 1 }} location={[0.25, 0.4, 1]} style={styles.raperlener}><Text style={styles.takePart}> See More </Text></LinearGradient>;
        } else if (contentType == "event") {
            return <LinearGradient colors={['#F67263', '#D32411']} start={{ x: 0, y: 1 }} location={[0.25, 0.4, 1]} style={styles.raperlener}><Text style={styles.takePart}> Event Detials </Text></LinearGradient>;
        }
    }
account

    render() {
        return (
            <FlatList
                data={this.state.posts}
                style={styles.box}
                extraData={this.state}
                renderItem={this.renderItem}
                numColumns={2}
                onEndReached={() => {
                    if (!this.onEndReachedCalledDuringMomentum) {
                        this.handleEnd();
                        this.onEndReachedCalledDuringMomentum = true;
                    }
                }}
                onEndReachedThreshold={0.5}
                onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
                keyExtractor={(item, index) => index.toString()}
            />
        );

    }


    renderItem = ({ item, index }) => {
        let firstElemnt = this.checkIndexIsEven(index) ? 300 : 300;
        let mainImg = item.mainImage;
        let title = item.title;
        let contentType = item.contentType;
        let profileImage = item.account !== undefined ? item.account.profileImage : "" ;
        

        let contentTypeServerFix;
        if (contentType == "recipe") {
            contentTypeServerFix = "recipes"
        } else if (contentType == "event") {
            contentTypeServerFix = "events"
        } else {
            contentTypeServerFix = "posts"
        }


        return (

            <TouchableHighlight index={index} onPress={(e) => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('Details', {
                    itemId: item.id,
                    contentType: contentTypeServerFix,
                });
            }} style={[styles.boxWrapper, { height: firstElemnt }]}>

                <ImageBackground imageStyle={{ borderRadius: 5 }} source={{ uri: mainImg }} style={styles.box} >
                    <LinearGradient opacity={1} start={{ x: 0.5, y: 0 }} end={{ x: 0, y: 1 }} colors={['#222322ad', 'transparent', '#222422ad']} style={styles.linearGradient}>
                        <View style={styles.rolerUp}>
                            <Image
                                style={styles.profileImage}
                                source={{ uri: profileImage }}
                            />
                            <TouchableWithoutFeedback style={styles.moreSetting} onPress={(e) => {
                                /* 1. Navigate to the Details route with params */
                                this.openSetting(index)
                            }}>

                                <Ionicons style={styles.action} name='md-more' color={"#fff"} />
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={styles.overlay}>
                            <Text style={styles.overlayText}>{title}</Text>
                        </View>

                        
                        <TouchableWithoutFeedback onPress={(e) => {
                            /* 1. Navigate to the Details route with params */
                            this.openSetting(index)
                        }}>
                            {this.state.index == index ?
                                <View style={styles.btnPost}>
                                    {this.state.showCancel ? <MainOption /> : null}
                                </View> : <Text></Text>}
                        </TouchableWithoutFeedback>

                        {this.displaycontentType(contentType)}
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
        margin: 1,
        borderColor: '#fff',
        borderRadius: 25,
        borderWidth: 1,
        position: 'relative'
    },
    box: {
        flex: 1,

    },
    moreSetting: {

    },
    rolerUp: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    overlay:{
        flex: 1,
        position: 'absolute',
        top: 40,
        padding:15,
        textAlign:"center",
        alignSelf: 'stretch',
        left:     0,
        right:      0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayText: {
        color:"#fff",
        textAlign:"center",
    },
    btnPost: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
    },
    takePart: {
        color: '#fff',
        padding: 3
    },
    raperlener: {
        borderRadius: 50,
        paddingRight: 10,
        paddingLeft: 10,
        bottom: 20,
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
    },
    action: {
        fontSize: 28,
        padding: 10
    },
    profileImage: {
        top: 0,
        marginTop: 10,
        marginLeft: 10,
        borderWidth: 2,
        borderRadius: 50,
        width:30,
        height:30
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
    textpost: {

    },
})

export default withNavigation(All);