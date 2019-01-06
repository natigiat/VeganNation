import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Text } from 'native-base';
import { Platform, StyleSheet, Image, View } from 'react-native';

import BtnLog from '../../../componentAsset/BtnLog';
// import CacheImage from '../../../componentAsset/CacheImage';
var s = require('../../style');




export class LoginScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  _handlePress() {

    const userName = this.state.username;
    const userpassword = this.state.password;

    // if(userName == "12" && userpassword == "12"){
    //     this.props.navigation.navigate('Home')
    // }
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <Container>

        <Content style={[s.margin]}>
          <View style={[s.margin, s.center]}>
            <Image
              style={[styles.logo, s.imageFull]}
              source={require('../../../../assets/img/icon.png')}
            />
            <Image
              style={[styles.logobord, s.imageFull]}
              source={require('../../../../assets/img/Layer2.png')}
            />
          </View>

          <Form >
            <View style={[styles.posit, styles.center, s.center]}>
              <Item style={[s.input, styles.inputrap]}>
                <Input
                  onChangeText={(text) => this.setState({ username: text })}
                  style={[styles.input, s.inputext]}
                  placeholder="Username"
                  placeholderTextColor="#31A514"
                />
              </Item>
              <Item style={[s.input, styles.inputrap]}>
                <Input
                  onChangeText={(text) => this.setState({ password: text })}
                  style={[styles.input, s.inputext]}
                  placeholder="Password"
                  placeholderTextColor="#31A514"
                />
              </Item>
            </View>


            <View style={styles.container} style={{ marginTop: 80 }}>
              <BtnLog
                text="SIGN IN"
                onPress={() => { this._handlePress() }}
                colors={['#32E9E9', '#12598C']}
                start={[1, 0]}
                widthtext={220}
              />
            </View>




            <View style={[styles.raptext, s.center]}>
              <Text onPress={() => this.props.navigation.navigate('Register')} style={styles.tex}>Sign Up /
              <Text onPress={() => this.props.navigation.navigate('ForgotPassword')} style={styles.tex}> Forgot Password</Text> </Text>
            </View>

            {/*          <Text onPress={() => this.props.navigation.navigate('AddEvent')}>event form</Text>
            <Text onPress={() => this.props.navigation.navigate('InviteFriendsToEvent')}>event inviete friend</Text>
            <Text onPress={() => this.props.navigation.navigate('Event')}>event</Text>*/}



            {/*<Text onPress={() => this.props.navigation.navigate('Camera')}>Recipe View</Text> */}

          </Form>
        </Content>
      </Container >
    );
  }



}



const styles = StyleSheet.create({
  logo: {
    height: 65,
    width: 190,
    marginTop: 5,
    marginBottom: 5,
  },
  logobord: {
    height: 36,
    width: 239,
  },
  btn: {
    borderRadius: 64,
    width: 220,
    color: '#31A514',
    borderRadius: 20,
    marginTop: 20,
    borderRadius: 64,
    color: '#31A514',
    alignSelf: 'center',

  },
  posit: {
    position: 'relative',
    marginTop: 100,
  },
  tex: {
    color: 'rgba(49, 165, 20, 0.7)',
  },
  raptext: {
    padding: 10,
  },
  texrbtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnpos: {
    marginTop: 80,
  },
  center: {
    width: '95%',
  },

})













