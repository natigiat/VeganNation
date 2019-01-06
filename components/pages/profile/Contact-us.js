import React, { Component } from 'react';
import { StyleSheet, WebView } from 'react-native';
import { Container } from 'native-base';
import { withNavigation } from 'react-navigation';





var s = require('../style');


// loopback-sdk
export class ContactScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <Container style={styles.container}>
        <WebView
          source={{ uri: 'http://marketing.vegannation.io/contact-us' }}

        />
      </Container>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default withNavigation(ContactScreen);


