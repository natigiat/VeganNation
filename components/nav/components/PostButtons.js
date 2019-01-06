import React, { Component } from 'react';
import { StyleSheet, Alert, Keyboard, KeyboardAvoidingView, SafeAreaView, TextInput, Modal, Animated, Share, StatusBar, Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, } from 'native-base';
import Dialog, { DialogContent, DialogButton } from 'react-native-popup-dialog';
import Inputkeyboard from '../../componentAsset/Inputkeyboard';

var s = require('../../pages/style');


export default class PostButtons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false,
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




  render() {
    let title = this.props.dataTitle !== undefined ? this.props.dataTitle : "";
    let description = this.props.dataDescription !== undefined ? this.props.dataDescription : "";

    var popupStatus = this.state.showPopUp
    return (
      <View>

        <View style={styles.poptHead}>

          <CardItem style={styles.widthIcon} button onPress={() => alert("This is Card Like")}>
            <Image source={require('../../../assets/img/menus/Ratings.png')} style={[s.imageFull, { width: 9, height: 16 }]} />
            <Text style={styles.text}>Rating</Text>
          </CardItem>

          <CardItem style={styles.widthIcon} button onPress={() => this.onShare(title, description)} >
            <Image source={require('../../../assets/img/menus/sharep.png')} style={[s.imageFull, { width: 16, height: 16 }]} />
            <Text style={styles.text}>Share</Text>
          </CardItem>

          <CardItem style={styles.widthIcon} button onPress={() => this.comment()}>
            <Image source={require('../../../assets/img/menus/comment.png')} style={[s.imageFull, { width: 16, height: 14.5 }]} />
            <Text style={styles.text}>Comment</Text>
          </CardItem>

        </View>


        {
          this.state.showPopUp == true ?
            <KeyboardAvoidingView
              style={styles.form}
              behavior="padding"
            >
              <View style={styles.popupbox}>
                <Inputkeyboard />
              </View>
            </KeyboardAvoidingView>
            : null
        }




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
    marginRight: 5,
    padding: 5
  },
  widthIcon: {
    //width:'25%'

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