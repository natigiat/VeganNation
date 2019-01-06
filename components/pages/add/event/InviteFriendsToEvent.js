import React, { Component } from 'react';
import { Dimensions, Share, Image, Text, View, StyleSheet, FlatList, ImageBackground, ScrollView, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'native-base';
import Carousel from 'react-native-snap-carousel';
var s = require('../../style');



let data = [];

export class InviteFriendsToEventScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      accountSelected: [],
      VcnSlider: 0
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
        contact = contacts.data[Num].name;

        contactList.push(contact)
      }



      this.setState({ text: contactList }, function () {
        // console.log(contactList);
      });

    }


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

  async shareSms(text, phoneNumber) {
    const permission = await Expo.Permissions.askAsync(Expo.Permissions.SMS);

    const isAvailable = await Expo.SMS.isAvailableAsync();
    if (isAvailable) {
      console.log("sms service available");
      const { result } = await Expo.SMS.sendSMSAsync(['0559292905'], 'My sample HelloWorld message');
    }
  }

  renderContactsOnApp = ({ item, index }) => {
    let imageUrl = item.profileImage;
    let BorderBackground = this.state.accounts[index].select == true ? 0 : 2


    return (

      <TouchableHighlight style={{ textAlign: 'center' }} onPress={(e) => {
        var Checkexiss = false

        console.log(this.state.accounts[index])
        if (this.state.accounts[index].select == true) {
          Checkexiss = true
          this.state.accounts[index].select = false
        }

        if (!Checkexiss) {
          this.state.accounts[index].select = true
        }
      }} underlayColor="transparent">
        <ImageBackground imageStyle={{
          flex: 1,
          resizeMode: 'contain', borderRadius: 40,
        }} source={{ uri: imageUrl }} style={[styles.userImg, styles.userImgContact, { borderWidth: BorderBackground, }]}>
          {this.state.accounts[index].select ?

            <View style={{ backgroundColor: '#31a51499', borderRadius: 40, width: 60, height: 60 }}>
              <Icon
                name='add'
                size={24}
                style={{ color: 'white', flex: 1, alignSelf: 'center', marginTop: 15, }}
              />
            </View>
            :
            null}
        </ImageBackground>
      </TouchableHighlight>
    );
  }
  onValueChange(e) {
    console.log(e)
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.container}>

        <View style={styles.btnWrapper}>
          <Text style={styles.btn}>INVITE</Text>
        </View>

        <Text style={styles.paragraph}>
          {item}
        </Text>
        <Image
          style={styles.userImg}
          source={require('../../../../assets/img/friends/1.png')}
        />

      </View>
    );
  }


  render() {
    var { height, width } = Dimensions.get('window');
    return (

      <ImageBackground source={require('../../../../assets/img/friends/freindwrapper.png')} style={styles.wrapper} >

        <View>
          <Text style={styles.title}>vegannation in my contacts</Text>
          <Carousel

            data={this.state.accounts}
            extraData={this.state}
            renderItem={this.renderContactsOnApp}
            sliderWidth={width}
            itemWidth={65}
          />

        </View>





        <Text style={styles.title}>Invite Friends to Vegan Nation</Text>
        <ScrollView style={styles.scroll2}>
          <FlatList
            data={this.state.text}
            style={styles.box}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}

          />
        </ScrollView>
        {/* <Text style={styles.title}>VCN PER FRIEND</Text>
        <Slider
          minimumValue={1}
          maximumValue={5}
          minimumTrackTintColor="#1EB1FC"
          maximumTractTintColor="#1EB1FC"
          step={1}
          value={1}
          onValueChange={value => this.onValueChange(value)}
          style={styles.slider}
          minimumTrackImag={"https://css-tricks.com/wp-content/uploads/2014/11/styled-input.png"}
          maximumTrackImage={"https://css-tricks.com/wp-content/uploads/2014/11/styled-input.png"}
          thumbImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7JEBVE6wNn63OYWa3p2IifQleRZSdvRVsVcl4iSzzNwWpb8dKQ"}
          trackImage={"https://css-tricks.com/wp-content/uploads/2014/11/styled-input.png"}
        />
        <Text style={{ textAlign: 'center', color: 'white' }}>Total VCN</Text>
        <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>
          <Image style={{ marginRight: 5 }} source={require('../../../../assets/img/iconVCNCoin.png')} />
          24 VCN</Text> */}
        <View style={[styles.title, styles.titleBack, s.t1]}>
          <TouchableWithoutFeedback onPress={this.onShare}>
            <Image
              height={40}
              style={[s.imageFull, { width: 50, height: 50 }]}
              source={require('../../../../assets/img/menus/share.png')}
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
    marginLeft: 'auto'
  },

  userImg: {
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#31c58d',
    borderWidth: 2,
    borderRadius: 70,
    borderColor: '#31c58d',
    width: 50,
    height: 50,
  },
  userImgContact: {
    marginTop: 20,
    width: 60,
    height: 60,
  },
  wrapper: {
    flex: 1,
    resizeMode: 'cover',
  },


  slider: {
    position: 'absolute',
    bottom: 0
  },
  title: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 32,
    padding: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  titleBack: {
    backgroundColor: '#31c58d',
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 42,
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
    flex: 1,
    flexDirection: 'row'
  },
  scroll2: {
    height: 30,
  },
  btnWrapper: {
    borderRadius: 70,
    borderColor: '#31c58d',
    borderWidth: 2,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10
  },
  btn: {
    color: "#31A514",
    textAlign: "left",

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
  SliderStyle: {
    position: 'relative',
    height: 50
  }
})
