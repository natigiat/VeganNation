import React, { Component } from 'react';
import {StyleSheet, View, Image,  ImageBackground, TouchableHighlight , TouchableOpacity} from 'react-native';
import { Container,  Content, Text } from 'native-base';
var s = require('../style');
import CommentPost from '../../FeedBack/Comment';
import PostButtons from '../../nav/components/PostButtons';
import PropTypes from 'prop-types';
import moment from 'moment';
import Inputkeyboard from '../../componentAsset/Inputkeyboard';


export default class RecipeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  

  speakMessage = () => {
    const { data } = this.props;
    const post =  data;
    let description = post.description !== undefined   ? post.description  : ""; 

    let text = description;
    let options = {
      language: 'en-EN', pitch: 1, rate: 0.8,
    }
    Expo.Speech.speak(text, options)
  }


  render() {
    const { data } = this.props;
    const post =  data;
    var timestamp = moment(post.timestamp).calendar();
    let postId = post.id !== undefined   ? post.id : "" ; 
    let ingredients = post.ingredients !== undefined   ? post.ingredients : []
    let profileImageUrl = post.account !== undefined   ? post.account.profileImage : ""; 
    let userId = post.account !== undefined   ? post.account.id  : ""; 
    let userName = post.account !== undefined   ? post.account.firstName + " " + post.account.lastName  : "";  

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
                                  source={{uri:profileImageUrl}}
                              />
                          </TouchableHighlight>
                          
                          <TouchableHighlight onPress={() => {
                              this.props.navigation.navigate('Profile', {
                                  userId: userId,
                          }); }}>
                              <Text style={styles.paragraph}>
                                {userName}
                              </Text>
                          </TouchableHighlight>

                          <View style={styles.timestamp}>
                              <Text style={[styles.btn]}>
                                   {timestamp}
                              </Text>
                          </View>
                    </View>
                   
                   
                    
                    <TouchableHighlight onPress={this.speakMessage}>
                          <ImageBackground  source={{uri:post.mainImage}} style={styles.box} />
                    </TouchableHighlight>
                    
                   
                       
                      

                  
                  <PostButtons/>
                  <Inputkeyboard postId={postId}/>
                  
                  <View style={styles.container}>
                    <Text style={[s.blueText,{textAlign: 'left',marginBottom:20,fontSize:20,textTransform:'capitalize'}]}>{post.title}</Text>
                    <Text style={[s.greenText,{textAlign: 'left',}]}>Ingredients</Text>
                    <View style={[s.flexRow,{marginBottom:20}]}>
                    {
                        ingredients.map((l, i) => (
                          <Text style={[{textAlign: 'left',}]}>{l.amount} {l.item}, </Text>
                        ))
                      }
                    </View>      
                    <Text style={[s.greenText]}>Recipe</Text>
                    <Text style={[s.t1,{textAlign: 'left',}]}>{post.description}</Text>
                  </View>
                  <CommentPost />
                  

              </Content>
          </Container>
    );
  }
}

RecipeScreen.propTypes = {
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
  box: {
    height: 400,
    padding: 0,
  },
  container: {
    padding: 20,
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
  poptHead:{
    borderBottomWidth:1,
    flex: 1,
    borderColor: '#ECEFF1',
    padding: 20,
    flexDirection: "row" , 
  },
  logo:{
      height:50,
      width:170,
      marginLeft:15,
      marginTop:5,
  },
  box: {
      height: 400,
      padding: 0,
  },
  title:{
    backgroundColor: '#209ab6',
    color:"#FFFFFF",
    textAlign: 'left',
    alignSelf: 'stretch',
    padding: 10,
  },
  widthImg:{
    flex:1,
    
  },
  maxWidthRow:{
    maxHeight:150
  },

  space: {
    margin: 2,
    backgroundColor: '#00CE9F'
  },

  col1: {
     height: 200 , marginRight: 2
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  
  userImg:{
    marginLeft:5,
    borderColor: '#31c58d',
    borderWidth:2,
    borderRadius: 70,
    borderColor: '#31c58d',
    width:40,
    height:40
  },
  btn:{
    color: "#31A514",
    textAlign:"left",
    paddingTop: 6,
    
  },
  timestamp:{
    position: 'absolute',
    right: 20,
    top:20
  }




})


