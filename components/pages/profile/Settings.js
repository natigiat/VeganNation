import React, { Component } from 'react';
import {  StyleSheet} from 'react-native';
import { Container } from 'native-base';
import { withNavigation } from 'react-navigation';





var s = require('../style');


// loopback-sdk
class SettingsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <Container style={styles.container}>

      </Container>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})




export default withNavigation(SettingsScreen);