import React, { Component } from 'react';
import { StyleSheet, Alert, Keyboard, KeyboardAvoidingView, Image, SafeAreaView, TextInput, Modal, Animated, Share, StatusBar, FlatList, ImageBackground, TouchableHighlight } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Input, TouchableWithoutFeedback } from 'native-base';
import Dialog, { DialogContent, DialogButton } from 'react-native-popup-dialog';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BtnLog from '../../componentAsset/BtnLog';
var s = require('../style');
export default class SendMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      profile: [
        { 'img': 'https://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg' },
        { 'img': 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg' },
        { 'img': 'https://img2.thejournal.ie/inline/2470754/original/?width=428&version=2470754' },
        { 'img': 'https://www.specialimages.co.uk/blog/wp-content/uploads/2013/06/LinkedIn-profile-photo2.jpg' }]
    };

  }

  async onShare(title, description) {

    try {
      const result = await Share.share({
        message:
          title + ": \n" + description +
          "\n \nCheck My Post On VeganNation -  app dounload link: https://vegannation.io/getTokens/user/register/g0swl1wfjord2edl",
      })



      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  comment() {
    this.setState({ showPopUp: !this.state.showPopUp });
  }
  componentDidMount() {
    setTimeout(() => this.componentDidMount(), 1);
  }
  componentWillMount() {
    fetch("http://68.183.209.228:3000/api/accounts")
      .then(response => response.text())
      .then(JSON.parse)
      .then(accounts => this.setState({ accounts }));
  }

  renderContactsOnApp = ({ item, index }) => {
    let imageUrl = item.profileImage;
    let userId = item.id;
    var lengthAccount = this.state.accounts.length - 3
    StringShowMore = '+' + lengthAccount
    if(index<3){
    console.log(imageUrl)
    return (
      <TouchableHighlight style={{marginHorizontal:5}} onPress={() => alert('2')}>
        <Image
          borderRadius={50}
          borderWidth={2}
          borderColor={'#3cbd5f'}
          style={{ width: 50, height: 50 }}
          source={{ uri: imageUrl }} />
      </TouchableHighlight>
    );}else if(index == 3){
      return (
        <View style={[s.flexRow,s.spaceBetween]}>
      <BtnLog text={StringShowMore}
          onPress={() => { this.openCalendar() }}
          colors={['#3cd29f', '#3cbd5f']}
          start={[1, 0]}
          colorFont={'#fff'}
          widthtext={25}
          Heighttext={25}
           />
           <BtnLog text={"MESSAGE"}
            borderWidth={2}
            borderColor={"#1b83a7"}
            onPress={() => { this.openCalendar() }}
            colors={['transparent','transparent']}
            start={[1, 0]}
            colorFont={'#074876'}
            padding={6}
            marginTop={8}
            marginLeft={5}
            widthtext={80}
            Heighttext={18}/>
            </View>)
    }
  }

  render() {
    //console.log(this.state.accounts)
    
    return (
      <View style={[s.flexRow,s.spaceBetween]}>
        <FlatList
        horizontal
          data={this.state.accounts}
          style={[s.flexRow, s.padding]}
          renderItem={this.renderContactsOnApp}
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
    );
  }



}

const styles = StyleSheet.create({
  poptHead: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around'

  },
  text: {
    color: "#31c58d",
    fontSize: 12,
    marginRight: 5

  },
  widthIcon: {

    textAlign: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  button: {
    margin: 24,
    padding: 40,
    width: '50%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "transparent",
    textAlign: 'center',
    color: '#ccc',
    backgroundColor: '#31c58d'
  },
  keyboardAvoidContainer: {
    // flex: 1,
    // backgroundColor: 'orange'
  },
  dialog: {
    width: '100%'

  },
  popupbox: {

    flex: 1,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.6)',
    position: 'absolute', top: 0, left: 0, right: 0


  },
  form: {
    // position: 'absolute',
    // top: -40,
    // zIndex: 5,
    // // flex: 1,
    // width: '100%',
    // justifyContent: 'space-between',
  },

});