import React, { Component } from 'react';
import { StyleSheet, Alert, Keyboard, KeyboardAvoidingView, SafeAreaView, TextInput, Modal, Animated, Share, StatusBar,Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Text } from 'native-base';
var s = require('../style');
export default class LinkOpetion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false,
    };

  }

  async onShare(title , description) {

    try {
      const result = await Share.share({
        message:
          title+ ": \n"  + description +
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
    let title = this.props.dataTitle !== undefined   ? this.props.dataTitle : "";
    let description = this.props.dataDescription !== undefined   ? this.props.dataDescription : "";

    var popupStatus = this.state.showPopUp
    return (

        <View style={[styles.poptHead,s.flexRow,s.spaceAround]}>
          <CardItem button style={{backgroundColor:'transparent'}} onPress={() => this.comment()}>
          <View style={[ styles.widthIcon,{alignItems:'center'}]} >
              <Image style={{width:20,height:20,}} source={require('../../../assets/img/icons/Going.png')} />
              <Text style={[styles.text,s.greenText]}>Going</Text>
          </View>
          </CardItem>
          <CardItem button style={{backgroundColor:'transparent'}} onPress={() => this.comment()}>
          <View style={[styles.widthIcon,{alignItems:'center'}]} >
            
              <Image style={{width:20,height:20,}} source={require('../../../assets/img/icons/Intrested.png')} />
              <Text style={[styles.text,s.greenText]}>Intrested</Text>
       
          </View>
          </CardItem>
          <CardItem button style={{backgroundColor:'transparent'}} onPress={() => this.comment()}>
          <View style={[styles.widthIcon,{alignItems:'center'}]} >
            
          <Image style={{width:20,height:20}} source={require('../../../assets/img/icons/Share.png')} />
              <Text style={[styles.text,s.greenText]}>Share</Text>
            
          </View>
          </CardItem>
          <CardItem button style={{backgroundColor:'transparent'}} onPress={() => this.comment()}>
          <View style={[styles.widthIcon,{alignItems:'center'}]}  >
            
          <Image style={{width:23,height:5,}} source={require('../../../assets/img/icons/More.png')} />
              <Text style={[styles.text,s.greenText]}>More</Text>
            
          </View>  
          </CardItem>
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

  },
  widthIcon: {
 
    textAlign:'center'
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