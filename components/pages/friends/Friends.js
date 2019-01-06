import React, { Component } from 'react';
import { Share, Image, Text, View, StyleSheet, FlatList, ImageBackground, ScrollView, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Animated } from 'react-native';
import randomColor from 'randomcolor';
var s = require('../style');
import { withNavigation } from 'react-navigation';

import Contacts from 'react-native-contacts';
import Permissions from 'react-native-permissions'

let data = [];


class FriendsScreen extends React.Component {




  constructor(props) {
    super(props);
    this.state = {
      ContactsPermission :null,
      accounts: [],
      fllow: {
        "userId": "5c1fb170c56bfd0f88f9fe1c",
        "followerId": global.userId,
      },
      fadeAnim: new Animated.Value(1),
    };

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


  _requestPermission = () => {
    console.log("request");
    alert(22)
    Permissions.request('contacts').then(response => {
      // Returns once the user has chosen to 'allow' or to 'not allow' access
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      console.log("response" + response)
      this.setState({ ContactsPermission: response })
    })
  }



  async componentDidMount() {
    // const permission = await Permissions.askAsync(Permissions.CONTACTS);

    // Permissions.check('contacts').then(response => {
    //   // Returns once the user has chosen to 'allow' or to 'not allow' access
    //   // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
    //   console.log("response" + response)
    //   this.setState({ ContactsPermission: response })
    // })
    _requestPermission()
    if (this.state.ContactsPermission !== 'granted') { return; }
    
   
  


    Contacts.getAll((err, contacts) => {
      if (err) throw err;
    
      // contacts returned
      console.log(contacts)
    })
    
    // const contacts = await Contacts.getContactsAsync({
    //   fields: [
    //     Contacts.PHONE_NUMBERS,
    //     Contacts.EMAILS,
    //   ],
    //   pageSize: 100,
    //   pageOffset: 0,
    // });


    // // console.log(contacts.data)
    // // console.log(contacts.data.length)
    // let contactsPhons = [];
    // let contactList = {};
    // let contact;
    // let phoneNumber;
    // let Num;
    // if (contacts.data.length > 0) {

    //   for (let Num = 0; Num < contacts.data.length; Num++) {
    //     // console.log("here" + Num);
    //     contact = contacts.data[Num].name;

    //     // check if number exsist
    //     if (contacts.data[Num].phoneNumbers !== undefined) {
    //       phoneNumber = contacts.data[Num].phoneNumbers[0].number;
    //     }

    //     contactList = {
    //       name: contact,
    //       phone: phoneNumber
    //     }

    //     // contactList[contact] = phoneNumber;
    //     // contactList[contact] = phoneNumber;
    //     // contactList.push({name:contact , number: phoneNumber})
    //     contactsPhons.push(contactList);
    //   }

    //   // console.log(contactList)
    //   this.setState({ text: contactsPhons }, function () {
    //     // console.log(contactsPhons);
    //   });

    // }


  }


  async onShare() {
    try {
      const result = await Share.share({
        message:
          "VeganNation is creating a global vegan economy. That based on its own currency, the VCN. In order to build a strong, big community, they are allocating VCNs for free to people that sign up and share spread the word to their friends. The more you share, the more tokens you get! Signing up is really fast, there's nothing to lose here and if this project becomes successful, you would be gaining a lot! Here is my invite link: https://vegannation.io/getTokens/user/register/g0swl1wfjord2edl This link will stop working once I’m out of invites so you better hurry up and sign in",
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
  // async shareSms(phoneNumber) {
  //   const permission = await Expo.Permissions.askAsync(Expo.Permissions.SMS);

  //   const isAvailable = await Expo.SMS.isAvailableAsync();
  //   if (isAvailable) {
  //     // console.log("sms service available");
  //     const { result } = await Expo.SMS.sendSMSAsync([phoneNumber], "you must download VeganNation app is the first vegan social media , its soo cool I'm allaredy a user");
  //   }
  // }


  async followUser(FollowerId, index) {
    this.setState({ "fllow.followerId": FollowerId });

    fetch('http://68.183.209.228:3000/api/follows', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.fllow)
    })
      .then((response) => response.json())
      .then((responseJson) => {

        console.log("follow")
        // this.props.navigation.navigate('Details', {itemId: responseJson.id});




        this.fadeOut(index)




      })
      .catch((error) => {
        console.error(error);
      })
  }




  fadeOut(index) {
    // this.state.fadeAnim.setValue(0)
    Animated.timing(
      this.state.fadeAnim,
      {
        setValue: 0,
        duration: 1000,

      }
    ).start();
    this.state.accounts.splice(index, 1)
  }

  // onRemove = (index) => {
  //   const { onRemove } = this.props;
  //   if (onRemove) {
  //     Animated.timing(this._animated, {
  //       toValue: 0,
  //       duration: ANIMATION_DURATION,
  //     }).start();
  //      this.state.accounts.splice(index, 1)
  //     onRemove();
  //   }
  // };

  // componentDidMount() {
  //   Animated.timing(this._animated, {
  //     toValue: 1,
  //     duration: ANIMATION_DURATION,
  //   }).start();
  // }




  renderContactsOnApp = ({ item, index }) => {
    let imageUrl = item.profileImage;
    let userId = item.id;
    let { fadeAnim } = this.state;
    // console.log(index)
    return (
      <Animated.View
        style={{ opacity: fadeAnim }}
      >


        <View style={styles.container}>


          <TouchableHighlight onPress={() => {
            this.props.navigation.navigate('Profile', {
              userId: userId,
            });
          }}>
            <Image source={{ uri: imageUrl }} style={styles.userImg} />

          </TouchableHighlight>


          <TouchableHighlight onPress={() => {
            this.props.navigation.navigate('Profile', {
              userId: userId,
            });
          }}>

            <Text style={styles.paragraph}>
              {item.firstName} {item.lastName}
            </Text>

          </TouchableHighlight>



          <TouchableHighlight style={[styles.btnWrapper]} onPress={() => { this.followUser(userId, index) }} underlayColor='#31c58d'>

            <View>
              <Text style={styles.btn}>Follow</Text>
            </View>

          </TouchableHighlight>











        </View>

      </Animated.View>
    );
  }


  renderItem = ({ item, index }) => {
    let color = randomColor();
    let conatctNumber = item.phone;
    return (
      <View style={styles.container}>



        <Text style={[styles.userBack, { backgroundColor: color }]}>
          {item.name.charAt(0)}
        </Text>

        <View style={styles.paragraph}>
          <Text style={styles.paragraph}>
            {item.name}
          </Text>
        </View>

        <View style={styles.btnWrapper}>
          <TouchableWithoutFeedback style={styles.shareIcon} onPress={() => console.log(22) }>
            <Text style={styles.btn}>INVITE</Text>
          </TouchableWithoutFeedback>

        </View>




      </View>
    );
  }

  render() {

    return (



      <ImageBackground source={require('../../../assets/img/friends/freindwrapper.png')} style={styles.wrapper} >

        <View>
          <View style={styles.topBarLeft}>

            <TouchableOpacity style={{ zIndex: 22 }} onPress={() => { this.props.navigation.navigate('Home') }}>
              <Image
                style={[s.imageFull, { width: 29, height: 29 }]}
                source={require('../../../assets/img/camera/back.png')}
              />
            </TouchableOpacity>



          </View>
          <Text style={styles.title}>VEGANNATION MEMBERS</Text>
          <ScrollView style={styles.scroll}>

            <FlatList
              data={this.state.accounts}
              style={styles.box}
              renderItem={this.renderContactsOnApp}
              keyExtractor={(item, index) => index.toString()}
            />

          </ScrollView>
        </View>



        <Text style={styles.title}>INVITE YOUR CONTACTS TO VEGANNATION</Text>
        <ScrollView style={styles.scroll2}>
          <FlatList
            data={this.state.text}
            style={styles.box}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>

        <View style={[styles.title, styles.titleBack, s.t1]}>
          <TouchableWithoutFeedback style={styles.shareIcon} onPress={this.onShare}>
            <Image
              style={styles.shareIcon}
              source={require('../../../assets/img/menus/share.png')}
            />

          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={this.onShare}>
            <Text style={[s.colorWhite, s.paddingRight]}>Share VeganNation</Text>
          </TouchableWithoutFeedback>
        </View>

      </ImageBackground>


    );
  }



}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 25
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'left',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    maxWidth: 180,
  },
  userImg: {
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#31c58d',
    borderWidth: 2,
    borderRadius: 70,
    borderColor: '#31c58d',
    width: 40,
    height: 40,
  },

  userBack: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 70,
    width: 41,
    height: 41,
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 41,
  },
  wrapper: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 32,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  titleBack: {
    backgroundColor: '#31c58d',
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 72,
    borderRadius: 26,
    marginRight: 10,
    marginLeft: 10,
    flexDirection: "row",
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  shareBtn: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 32,
    flex: 1,
  },
  box: {
    marginRight: 10,
    marginLeft: 10,
  },
  accounts: {
    marginRight: 10,
    marginLeft: 10,
  },
  scroll: {
    height: 210,
  },
  scroll2: {
    height: 30,
  },
  btnWrapper: {
    borderRadius: 70,
    borderColor: '#31c58d',
    borderWidth: 2,
    borderRadius: 70,
    borderColor: '#31c58d',
    paddingRight: 20,
    paddingLeft: 20,
    position: 'absolute',
    right: 0
  },
  btn: {
    color: "#31c58d",
    textAlign: "right",
    padding: 5,
    marginTop: 2,

  },

  item: {
    flex: 1,
  },

  action: {
    position: "absolute", right: 10, top: 10,
    fontSize: 24,
  },

  profileImage: {
    top: 0,
    marginTop: 15,
    marginLeft: 15,
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
  },
  shareIcon: {
    marginRight: 5,
    height: 20,
    width: 20,
  },
  topBarLeft: {
    left: 5,
    top: 20,
    width: 55,
    zIndex: 12,

  },
  inactive: {
    backgroundColor: '#31c58d'
  }


})

export default withNavigation(FriendsScreen);
