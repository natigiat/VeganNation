import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet,  View , Image , ImageBackground , TouchableHighlight}  from 'react-native';
import { Container,  Content, Text ,} from 'native-base';
import PostButtons from '../../nav/components/PostButtons';
import CommentPost from '../../FeedBack/Comment';
import EventScreen from '../events/View';
import RecipeScreen from '../recipes/View';
import Inputkeyboard from '../../componentAsset/Inputkeyboard';


import moment from 'moment';



var s = require('../style');

export  class DetailsScreen extends React.Component{
  
  constructor(){
    super();

    

    this.state ={
        post: [],
        isReady: false,
        contentType:"",
        bytsImags: null,
        postId:null,
    }
    

   
    
  }
  
  speakMessage = () => {
    const post = this.state.post;
    let description = post.description !== undefined   ? post.description  : ""; 

    let text = description;
    let options = {
      language: 'en-EN', pitch: 1, rate: 1.0,
    }
    Expo.Speech.speak(text, options)
  }


  componentWillMount() {
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const contentType = navigation.getParam('contentType', 'NO-ID');
      const bytsImags = navigation.getParam('bytsImags', undefined);

      this.setState({ contentType : contentType})
      this.setState({ bytsImags : bytsImags})
      
      
      const UrlData = `http://68.183.209.228:3000/api/${contentType}/${itemId}/details`;
      fetch(UrlData)
        .then(response => response.text())
        .then(JSON.parse)
        .then(post => this.setState({ post: post.result[0] , postId: post.result[0].id }));
  }

  
  loading(){
      return(<View></View>)
  }
  
  render() {
    const post = this.state.post;
    var timestamp = moment(post.timestamp).calendar();
    let postId = post.id !== undefined   ? post.id : "" ; 
    let ingredients = post.ingredients !== undefined   ? post.ingredients : []
    let profileImageUrl = post.account !== undefined   ? post.account.profileImage : ""; 
    let userId = post.account !== undefined   ? post.account.id  : ""; 
    let userName = post.account !== undefined   ? post.account.firstName + " " + post.account.lastName  : "";  

    console.log(postId)
    let title = post.title !== undefined   ? post.title : ""; 
    let description = post.description !== undefined   ? post.description  : ""; 
    
    if (this.state.contentType == "posts") {
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

                      {this.state.bytsImags!=undefined

                      ?

                      <ImageBackground  source={{uri:`data:image/jpeg;base64,${this.state.bytsImags}`}} style={styles.box} >
                          
                        

                      </ImageBackground>

                      :

                      <ImageBackground  source={{uri:post.mainImage}} style={styles.box} >
                          


                      </ImageBackground>
                      }

                    <PostButtons  dataTitle={title} dataDescription={description} />
                    <Inputkeyboard postId={this.state.postId}/>
        
              
      

                    <View style={styles.container}>
                      <Text style={[s.t1,{textAlign: 'left',}]}>{post.description}</Text>
                    </View>
                    <CommentPost  data={post.comments} />
                </Content>
                
            </Container>
          );
        
        
    } else if (this.state.contentType == "recipes")  {
        return (
          <RecipeScreen data={post} />
         
        );
    } else if (this.state.contentType == "events")  {
      
        return (
          
          <EventScreen data={post}/>
        );
    }


  
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    textAlign: 'left',
    flex: 1,
    marginBottom:20 
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


