import React, { Component } from 'react';
import { StyleSheet, WebView } from 'react-native';
import { Container } from 'native-base';
import { withNavigation } from 'react-navigation';




var s = require('../style');


// loopback-sdk
export class UserMediaScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <Container style={styles.container}>
        <WebView
          source={{ uri: 'http://marketing.vegannation.io/register?hs_preview=hXtDaHUT-6492375454' }}

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

export default withNavigation(UserMediaScreen);


