import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Text } from 'native-base';
import { StyleSheet, Image, View } from 'react-native';
import BtnLog from '../../../componentAsset/BtnLog';
var s = require('../../style');



export class ForgotPasswordScreen extends React.Component {



  render() {
    return (
      <Container>

        <Content style={[s.margin, s.textAlignCenter]}>
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

          <View style={[styles.textaria]}>
            <Text style={styles.textop} >Please enter your email address, and we will send you a temporary password, thank you.</Text>
          </View>

          <Form>

            <Item style={[s.input, styles.inp, style = { marginTop: 80 }]} >
              <Input
                style={[styles.inpt, s.inputext]}
                placeholder="Email"
                placeholderTextColor="#31A514"
              />
            </Item>


            <View style={styles.container} style={{ marginTop: 100 }}>

              <BtnLog
                text="SEND"
                onPress={() => { this._handlePress() }}
                colors={['#32E9E9', '#12598C']}
                start={[1, 0]}
                widthtext={220}
              />
            </View>

            <View style={[styles.raptext, s.center]}>
              <Text onPress={() => this.props.navigation.navigate('Register')} style={styles.tex}>Sign Up /
            <Text onPress={() => this.props.navigation.navigate('Login')} style={styles.tex}>Sign in</Text></Text>
            </View>



          </Form>
        </Content>
      </Container>
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
    width: 150,
    color: '#31A514',
  },
  frg: {
    marginTop: 20,
  },
  textaria: {
    padding: 5,
  },
  textop: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 0,
    color: '#31a514',
  },
  raptext: {
    padding: 10,
  },
  tex: {
    color: 'rgba(49, 165, 20, 0.7)',
  },
  inp: {
    borderBottomColor: '#31a514',
    color: '#31a514',
  },
  // inpt: {
  //   inputColorPlaceholder: '#31a514',
  // }

})


