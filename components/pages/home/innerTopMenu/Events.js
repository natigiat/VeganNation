import React, { Component } from 'react';
import { Animated, FlatList, TouchableHighlight, View, StyleSheet, ImageBackground, Image, RefreshControl } from "react-native";
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import randomColor from 'randomcolor';
import MainOption from '../../../pages/optionPost/MainOption';




class Events extends React.Component {
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
    }



    componentWillMount() {
        this.fetchData();
    }



    fetchData = async () => {
        fetch(`http://68.183.209.228:3000/api/events/Images/${this.state.page}`)
            .then(response => response.text())
            .then(JSON.parse)
            .then(posts => this.setState(state => ({
                posts: [...state.posts, ...posts.result],
                loading: false
            })))
            .then(this.setState({ refreshing: false }));
    }



    _onRefresh = () => {
        this.setState({ refreshing: true });
        this.fetchData();
    }


    handleEnd = () => {
        console.log("page is " + this.state.page);
        this.setState(state => ({ page: state.page + 1 }), () => this.fetchData());
    }

    render() {
        console.log(this.state.posts)
        return (
            <FlatList
                data={this.state.posts}
                style={styles.wrap}
                extraData={this.state.posts}
                renderItem={this.renderItem}
                key={this.numOfColumns}
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
        )
    }




    renderItem = ({ item, index }) => {
        var firstElemnt = this.checkIndexIsEven(index) ? 300 : 300
        let randColor = randomColor();

        // console.log(item)
        return (


            <TouchableHighlight onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('Details', {
                    itemId: item.id,
                    contentType: "events",
                });
            }} style={[styles.boxWrapper, { height: firstElemnt }]}>

                <ImageBackground imageStyle={{ borderRadius: 5 }} source={{ uri: item.mainImage }} style={styles.box} >
                    <LinearGradient opacity={1} start={{ x: 0.5, y: 0 }} end={{ x: 0, y: 1 }} colors={['#222222ad', 'transparent', '#222222ad']} style={styles.linearGradient}>
                        <TouchableHighlight onPress={() => alert('2')} >
                            <Ionicons style={styles.action} name={'md-more'} color={"#fff"} />
                        </TouchableHighlight>
                        <Image
                            style={styles.profileImage}
                            source={{ uri: item.account.profileImage }}
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
        borderWidth: 2,
        borderRadius: 50,
        width: 30,
        height: 30

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

export default withNavigation(Events);