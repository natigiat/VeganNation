import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList,View , Image , Dimensions , Button,  ImageBackground , TouchableHighlight}  from 'react-native';
import FAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator  , createStackNavigator  , TabNavigator} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

import {ButtonOption}  from './ButtonOption';


//var s = require('../style');
// Configs

export default class MainOption extends Component {

  render() {
    return (
        <Container style={styles.boxWrapper}>
           <ButtonOption icon='share-alt'/>
           <ButtonOption icon='comment'/>
           <ButtonOption icon='flag'/>
        </Container>
     )
   }
 



}




const styles = StyleSheet.create({
  boxWrapper:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#0000008a',
    borderRadius: 5,
  },
  allbox: {
    
    alignSelf: 'flex-end',
  	marginLeft: 90,
  	width:140,
    top:0,
    
  
   },
  box: {
    flex: 1,
    flexDirection:'row',
    textAlign:'center'
    
  },
  buyVcn:{
     height:30,
     alignItems: 'center',
     justifyContent: 'center',
     color: '#ffffff',
     width:120,
     borderRadius: 25,
  },

  action:{
     position: "absolute", right:10, top:10, 
     fontSize: 24,
  },
  Tabs:{
    backgroundColor:'white',
    
  },
  TabsText:{
    color:'#3cc67a'
  },
  vcnBox: {
    height:60,
    margin:15,
    borderRadius: 5,
  },

  linearGradient: {
    flex: 1,
  },
})


