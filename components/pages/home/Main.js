import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList, Text, View , Image , Dimensions , ImageBackground , TouchableHighlight}  from 'react-native';
import FAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
// Configs

import TopMenuInner from './TopMenuInner'



export class HomeScreen extends React.Component {
  


  
  render() {
    return (
        <View style={styles.box}>
           <TopMenuInner />
        </View>
    );
  }



}






const styles = StyleSheet.create({
  box: {
    flex: 1,
    
  }
})




