import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Badge } from 'native-base';
import { withNavigation } from 'react-navigation';
import Menu from '../componentAsset/menu';
import MenuIco from '../componentAsset/Menuico';

var s = require('../pages/style');






// Configs


class TopMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      menuOpenIco: false,
    };

  }

  handleMenu() {
    // const { menuOpen } = this.state
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  handleMenuIco() {
    // const { menuOpen } = this.state
    this.setState({
      menuOpenIco: !this.state.menuOpenIco
    })
  }




  render() {

    return (


      <View  >

        <ImageBackground source={require('../../assets/img/top.png')} style={styles.box} >


          <Badge style={styles.badge} warning>
            <Text>2</Text>
          </Badge>
          <TouchableOpacity style={styles.profileImg} onPress={() => this.handleMenu()}>
            <View pointerEvents='none'>
              <Image
                style={styles.userImg}
                source={{uri:global.profileImageUrl}}
              />
              <TextInput editable={false} />
            </View>

          </TouchableOpacity>


          <View style={styles.logo}>
            <Image
              style={[styles.logobord, s.imageFull]}
              source={require('../../assets/img/Group(5).png')}
            />
          </View>
        </ImageBackground>


        <TouchableOpacity style={styles.icoBtn} onPress={() => this.handleMenuIco()}>
          <View pointerEvents='none'>
            <Image
              style={styles.icoBtnImg}
              source={require('../../assets/img/coinsmall.png')}
            />
            <TextInput editable={false} />
          </View>

        </TouchableOpacity>



        {this.state.menuOpen == true ? <View style={{ flex: 1 }}><Menu /></View> : null}
        {this.state.menuOpenIco == true ? <View style={{ flex: 1 }}><MenuIco /></View> : null}


      </View>



    );
  }
}






const styles = StyleSheet.create({
  wrapper: {
    height: 30,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  box: {
    height: 90,
    backgroundColor: '#ffffff',
  },
  profile: {
    top: 20,
    alignSelf: 'flex-start',
  },
  profileImg: {
    top: 30,
    right: 20,
    position: 'absolute',
  },
  icoBtn: {
    top: 45,
    left: 20,
    position: 'absolute',
  },
  icoBtnImg: {
    width: 40,
    height: 40
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: 23,
    height: 20,
    width: 20,
    right: 52,
  },
  logo: {
    height: 60,
    width: 170,
    marginTop: 5,
    position: 'absolute',
    alignSelf: 'center',
    bottom: '2%',
  },
  logobord: {
    height: 60,
    width: 170,
  },
  userImg:{
    borderWidth:2,
    borderRadius: 70,
    width:50,
    height:50
  },
})

export default withNavigation(TopMenu);



