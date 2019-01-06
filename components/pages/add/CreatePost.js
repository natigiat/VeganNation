import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Text, Button, Textarea, Tab, Tabs, TabHeading, Switch, } from 'native-base';
import { Platform, StyleSheet, Image, View, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BtnLog from '../../componentAsset/BtnLog';
import { ButtonOption } from '../optionPost/ButtonOption';
import FormPost from './post/Form';
import FormScreen from './recipe/Form';
import AddEventScreen from './event/Form'
var s = require('../style');

export class AddPostScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      descriptionText: '',
      pageNumber: 1,
      scrollWithoutAnimation: true,
      currentTab: 4,
      pageToget: 'Post'
    }

  }

  componentDidMount() {
    const userName = this.state.descriptionText;
  }


  addPost() {
    fetch('http://68.183.209.228:3000/api/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mainImage: 'https://images.pexels.com/photos/671549/pexels-photo-671549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        description: this.state.descriptionText
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {

        // this.props.navigation.navigate('Home');

        this.props.navigation.navigate('Details', { itemId: responseJson.id });

      })
      .catch((error) => {
        console.error(error);
      })
  }



  _handlePress() {
    this.props.navigation.navigate('Home')
  }

  SwitchCreatPost() {

    if (this.state.pageToget == 'Post') {
      return (<View>
        <FormPost />
      </View>)
    } else if (this.state.pageToget == 'Recipe') {
      return (<View>
        <FormScreen />
      </View>)
    } else if (this.state.pageToget == 'Event') {
      return (<View>
        <AddEventScreen />
      </View>)
    }

  }

  render() {
    return (
      <Container>

        <Content style={[s.margin, s.textAlignCenter]}>

          <Form>
            <View>
              <View style={[s.flexRow, { justifyContent: 'space-around' }]}>

                <View>
                  <TouchableHighlight onPress={(e) => { this.setState({ pageToget: 'Post' }) }} underlayColor="transparent">
                    <ButtonOption style={{ borderWidth: 2 }} icon='edit' />
                  </TouchableHighlight>
                  <Text style={{ textAlign: 'center' }}>Post</Text>
                </View>
                <View>
                  <TouchableHighlight onPress={(e) => { this.setState({ pageToget: 'Recipe' }) }} underlayColor="transparent">
                    <ButtonOption borderColor={'black'} style={{ borderWidth: 2 }} icon='comment' />
                  </TouchableHighlight>
                  <Text style={{ textAlign: 'center' }}>Recipe</Text>
                </View>
                <View>
                  <TouchableHighlight onPress={(e) => { this.setState({ pageToget: 'Event' }) }} underlayColor="transparent">
                    <ButtonOption borderColor={'black'} style={{ borderWidth: 2 }} icon='calendar' />
                  </TouchableHighlight>
                  <Text style={{ textAlign: 'center' }}>Event</Text>
                </View>


              </View>
            </View>





            <View style={styles.container} style={{ marginTop: 10 }}>
              {SwitchCreatPost()}
            </View>





          </Form>
        </Content>
      </Container>
    );
  }



}



const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 100,
    marginLeft: 15,
    marginTop: 5,
  },
  Tab: {
    backgroundColor: 'white',
    height: 50

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
  btn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btngrd: {
    width: 250,
  },
  userImg: {
    marginTop: 20,
    borderColor: '#31c58d',
    borderWidth: 2,
    borderRadius: 70,
    borderColor: '#31c58d',
    alignSelf: 'stretch',
    height: 300
  },

})













