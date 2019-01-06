import React, { Component } from 'react';
import { Platform, StyleSheet, FlatList, View, Image, Dimensions, ImageBackground, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, ListItem, CheckBox, Body, Icon, Textarea } from 'native-base';
import FAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Col, Row, Grid } from 'react-native-easy-grid';
var s = require('../style');
import CommentPost from '../../FeedBack/Comment';
import PropTypes from 'prop-types';
import PostButtons from '../../nav/components/PostButtons';
export default class PostScreen extends React.Component {
  render() {
    const {data} = this.props;
    console.log(data.account)
    return (
      <Container>
              <Content>
                    <View style={styles.poptHead}>
                          
                          <TouchableHighlight onPress={() => {
                              this.props.navigation.navigate('Profile', {
                                  userId: userId,
                          }); }}>
                              <Image
                                  style={styles.userImg}
                                  source={{uri:data.account.profileImage}}
                              />
                          </TouchableHighlight>
                          
                          <TouchableHighlight onPress={() => {
                              this.props.navigation.navigate('Profile', {
                                  userId: data.userId,
                          }); }}>
                              <Text style={styles.paragraph}>
                                {data.account.firstName} {data.account.lastName}
                              </Text>
                          </TouchableHighlight>

                          <View style={styles.timestamp}>
                              <Text style={[styles.btn]}>
                                   {data.timestamp}
                              </Text>
                          </View>
                    </View>
                   <ImageBackground  source={{uri:data.mainImage}} style={styles.box} >
                       
                       <SliderRang style={{position: "absolute", bottom: 0, right: 0}} />

                  </ImageBackground>

                  <PostButtons  dataTitle={data.title} dataDescription={data.description} />

                  <View style={styles.container}>
                    <Text style={[s.t1,{textAlign: 'left',}]}>{data.description}</Text>
                  </View>
                  <CommentPost  data={data.comments} />
              </Content>
              
          </Container>
    );
  }
}

PostScreen.propTypes = {
  data: PropTypes.object.isRequired
};
const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 170,
    marginLeft: 15,
    marginTop: 5,
  },
  title: {
    backgroundColor: '#209ab6',
    color: "#FFFFFF",
    alignSelf: 'stretch',
    textAlign: 'center',
    padding: 10,
  },
  widthImg: {
    flex: 1,
  },
  maxWidthRow: {
    maxHeight: 150
  },
  space: {
    margin: 2,
    backgroundColor: '#00CE9F'
  },
  container: {
    flex: 1,
    color: "#FFFFFF",
  },
  widthImg: {
    borderRadius: 5,
    flex: 1,
    width: '100%',
  },
  widthImg2: {
    width: '100%',
    borderRadius: 5,
  },
  maxWidthRow: {
    maxHeight: 165,
  },
  ImagHeigh: {
    maxHeight: 74.5,
  },
  space: {
    margin: 2,
    flex: 0.5,
    borderRadius: 64,
  },
  col1: {
    height: 100,
    marginRight: 2
  },
  cont: {
    marginLeft: 7,
    marginRight: 7,
    marginTop: 35
  },
  t1: {
    color: '#074876',
    fontSize: 18,
  },
  t2: {
    color: '#31A514',
    marginTop: 10
  },




})


