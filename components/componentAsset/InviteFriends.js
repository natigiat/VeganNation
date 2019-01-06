import React, { Component } from 'react';
import { StyleSheet, Alert, Keyboard, KeyboardAvoidingView, Image, SafeAreaView, TextInput, Modal, Animated, Share, StatusBar, FlatList, ImageBackground, ScrollView, TouchableHighlight } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Input, TouchableWithoutFeedback } from 'native-base';
import Dialog, { DialogContent, DialogButton } from 'react-native-popup-dialog';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BtnLog from './BtnLog';

var s = require('../pages/style');
export default class InviteFriends extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      profile: [
       ],
       contacts:null
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
  // shareSms(text, phoneNumber)
  async shareSms(phoneNumber) {
    const permission = await Expo.Permissions.askAsync(Expo.Permissions.SMS);

    const isAvailable = await Expo.SMS.isAvailableAsync();
    if (isAvailable) {
      // console.log("sms service available");
      const { result } = await Expo.SMS.sendSMSAsync([phoneNumber], "you must download VeganNation app is the first vegan social media , its soo cool I'm allaredy a user");
    }
  }

  comment() {
    this.setState({ showPopUp: !this.state.showPopUp });
  }

  async componentDidMount() {
    const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
    if (permission.status !== 'granted') { return; }

    const contacts = await Expo.Contacts.getContactsAsync({
      fields: [
        Expo.Contacts.PHONE_NUMBERS,
        Expo.Contacts.EMAILS,
      ],
      pageSize: 100,
      pageOffset: 0,
    });


    // console.log(contacts.data)
    // console.log(contacts.data.length)
    let contactList = []
    let contact;
    let Num;
    if (contacts.data.length > 0) {

      for (let Num = 0; Num < contacts.data.length; Num++) {
        // console.log("here" + Num);
        contact = contacts.data[Num];

        contactList.push(contact)
      }

      

      this.setState({ contacts: contactList }, function () {
        // console.log(contactList);
      });

    }
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
    var phoneNumber; 
    if(item.phoneNumbers !=undefined){
      phoneNumber=item.phoneNumbers[0].number

    }
    
    return (
      <View style={[{ textAlign: 'center' }]}>
        <TouchableHighlight onPress={() => alert(2)} underlayColor="#ccc">
          <View style={[s.flexRow, s.spaceBetween, { margin: 7 }]}>
            <View style={[s.flexRow]}>
              {/* <Image
                borderRadius={50}
                borderWidth={2}
                borderColor={'#3cbd5f'}
                style={{ width: 50, height: 50 }}
                source={{ uri: item.profileImage }} /> */}
                <View>

              <Text style={{backgroundColor:'#31b84f',width:50,height:50,
              flex:1,flexDirection:'column',
              justifyContent: 'center',paddingTop:15 ,textAlign:'center',
              color:'#fff',
              fontWeight:'bold',
              borderRadius:50}}>
                {item.name[0]}
              </Text>  
              </View>
              <View style={[s.paddingLeft,{textAlignVertical:'bottom'}]}>
                <Text style={{ textAlign: 'left' }}>{item.name}</Text>
              </View>

            </View>
            <BtnLog text={"Invite"}
              onPress={() => this.shareSms(phoneNumber)}
              colors={['transparent', 'transparent']}
              start={[1, 0]}
              colorFont={'#3cbd5f'}
              borderColor={'#3cbd5f'}
              borderWidth={2}
              padding={5}
              widthtext={100}
              Heighttext={18} />
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    console.log(this.state.profile[0])
    var lengthAccount = this.state.profile.length - 3
    StringShowMore = '+' + lengthAccount
    return (
      <View style={s.padding}>
        <Text style={{ textAlign: 'center', alignItems: 'center', fontWeight: 'bold' }}>Suggested Friends</Text>

        <ScrollView style={{height:250,overflow:'scroll'}}>
          <FlatList
            data={this.state.contacts}
            style={styles.box}
            renderItem={this.renderContactsOnApp}
            keyExtractor={(item, index) => index.toString()}
          />

        </ScrollView>
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
  scroll: {
    height: 250,
    marginTop: 7,
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