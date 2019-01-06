import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, ListItem, CheckBox, Body, Icon } from 'native-base';
import { Platform, StyleSheet, Image, View, Divider } from 'react-native';
import BtnLog from '../../../componentAsset/BtnLog';
var s = require('../../style');




export class RegistrationScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content >

          <View style={[styles.margin, s.center, styles.rap]}>
            <Image
              style={[styles.logo, s.imageFull]}
              source={require('../../../../assets/img/profileimage.png')}
            />


            <Text style={[styles.tex, s.center]} style={{ color: '#31a514' }}>Upload you Profile image</Text>
          </View>


          <Form style={styles.from}>
            <Item style={[s.center, s.input, styles.mar]}>
              <Input
                placeholder="Email"
                style={s.inputext}
                placeholderTextColor="#31A514"
              />
            </Item>
            <Item style={[s.center, s.input, styles.mar]}>
              <Input
                placeholder="Username"
                style={s.inputext}
                placeholderTextColor="#31A514"
              />
            </Item>
            <Item style={[s.center, s.input, styles.mar]}>
              <Input
                placeholder="Password"
                style={s.inputext}
                placeholderTextColor="#31A514"
              />
            </Item>
            <ListItem style={[s.center, styles.bord]}>

              <CheckBox checked={false} style={styles.check} />

              <Text style={styles.priv}>  I have read and accept the
                   <Text onPress={() => this.props.navigation.navigate('Privacy')} style={[styles.priv, styles.textbroder]}> privacy policy</Text>
              </Text>

            </ListItem>

            <View style={styles.container} style={{ marginTop: 80 }}>
              <BtnLog
                text="SIGN UP"
                onPress={() => { this._handlePress() }}
                colors={['#32E9E9', '#12598C']}
                start={[1, 0]}
                widthtext={220}
              />
            </View>



          </Form >

          <View style={[styles.raptext, s.center]}>
            <Text onPress={() => this.props.navigation.navigate('Login')} style={styles.tex}>Sign in /
              <Text onPress={() => this.props.navigation.navigate('ForgotPassword')} style={styles.tex}> Forgot Password</Text> </Text>
          </View>


        </Content >
      </Container >
    );
  }



}

const styles = StyleSheet.create({
  logo: {
    height: 70,
    width: 170,
    marginLeft: 15,
    marginTop: 20,
  },
  btn: {
    borderRadius: 64,
    width: 150,
    color: '#31A514',
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    color: '#841584',
    backgroundColor: '#aaa'
  },
  rap: {
    marginBottom: 40,
    marginTop: 30,
  },
  btnpos: {
    marginTop: 20,
  },
  texrbtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bord: {
    borderBottomWidth: 0,
    marginTop: 5,
  },
  input: {
    borderBottomColor: '#31a514',
    color: '#31a514',
  },
  mar: {
    margin: 10,
  },
  priv: {
    fontSize: 16,
  },
  textbroder: {
    textDecorationLine: 'underline',
  },
  tex: {
    color: 'rgba(49, 165, 20, 0.7)',
    textAlign: 'left',
  },
  check: {
    borderColor: '#31a514',
  },
  margin: {

  }

})


