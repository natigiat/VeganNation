import React, { Component } from 'react';
import { Animated, FlatList, TouchableHighlight, Text, View, StyleSheet, ImageBackground, TouchableWithoutFeedback, Image, RefreshControl } from "react-native";
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import MainOption from '../../../pages/optionPost/MainOption'




class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0 , 
            showCancel: true,
            posts: [],
            index: null,
            refreshing: false,
        }

        this.onEndReachedCalledDuringMomentum = true;
    }


    componentWillMount() {
      this.fetchData();
    }

    

    fetchData = async () => {
      fetch(`http://68.183.209.228:3000/api/recipes/images/${this.state.page}`)
      .then(response => response.text())
        .then(JSON.parse)
        .then(posts => this.setState(state => ({
            posts: [...state.posts , ...posts.result],
            loading: false
        })))
        .then(this.setState({refreshing: false}));
    }



    _onRefresh = () => {
        this.setState({ refreshing: true });
        this.fetchData();
    }
    

    handleEnd = () => {
        console.log("page is " + this.state.page);
        // console.log(this.state.posts);
        this.setState(state => ({ page: state.page + 1 }), () => this.fetchData());
    }


    render() {
        return (
            <FlatList
                data={this.state.posts}
                style={styles.wrap}
                extraData={this.state.posts}
                renderItem={this.renderItem}
                key={this.numOfColumns}
                numColumns={1}
                onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                onEndReached={()=> {
                    if(!this.onEndReachedCalledDuringMomentum){
                        this.handleEnd();
                        this.onEndReachedCalledDuringMomentum = true;
                    }
                }}
                onEndReachedThreshold={0.5}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }



 
    renderItem = ({ item, index }) => {
        var firstElemnt = this.checkIndexIsEven(index) ? 250 : 250
        let mainImage = item.mainImage !== undefined   ? item.mainImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTci_mCcrhBn98bgVWxlhejvJEgqJMSNeul5wqIa152ipHw0Ag-PA"; 
        let profileImage = item.account !== undefined   ? item.account.profileImage : ""; 
        let title = item.title;


        return (


            <TouchableHighlight onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('Details', {
                    itemId: item.id,
                    contentType:"recipes",
                });
            }} style={[styles.boxWrapper, { height: firstElemnt }]}>

                <ImageBackground imageStyle={{ borderRadius: 5 }} source={{ uri: mainImage }} style={styles.box} >
                    <LinearGradient opacity={1} start={{ x: 0.5, y: 0 }} end={{ x: 0, y: 1 }} colors={['#222222ad', 'transparent', '#222222ad']} style={styles.linearGradient}>
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
    wrap: {
        margin: 5,
    },
    boxWrapper: {
        flex: 1,
        flexDirection: 'column',
        height: 300,
        margin: 5,
        borderColor: '#fff',
        borderRadius: 25,
        borderWidth: 1,

    },
    box: {
        flex: 1,

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

    btnPost: {},
    action: {
        position: "absolute", right: 10, top: 10,
        fontSize: 24,
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
})

export default withNavigation(Recipe);