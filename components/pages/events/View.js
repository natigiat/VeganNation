import React, { Component } from 'react';
import { Platform, StyleSheet, FlatList, View, Image, Dimensions, ImageBackground, TouchableHighlight, ScrollView } from 'react-native';
import { Container, Header, Content, Button, Text, ListItem, CheckBox, Body, Card, CardItem } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Geocoder from 'react-native-geocoding';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { SeparationLine } from '../../componentAsset/SeparationLine';
import PropTypes from 'prop-types';
import LinkOpetion from './LinkOpetion';
import moment from 'moment';
import CommentPost from '../../FeedBack/Comment';
import FriendsFeedback from './FriendsFeedback'
import MapEvent from '../../componentAsset/MapEvent'
var { height, width } = Dimensions.get('window');
var s = require('../style');



// loopback-sdk
export default class EventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
    };

  }

  
  render() {
  
    
    const { data } = this.props;
    
    return (
      <ScrollView style={[s.paddingBotton,{ backgroundColor: '#fff' }]}>
        <View >

          <ImageBackground imageStyle={{ borderRadius: 0 }} source={{ uri: data.mainImage }} style={[styles.box, { textAlign: 'center', borderRadius: 10, flex: 1, flexDirection: 'column', justifyContent: 'space-around' }]} >
            
            {/* <View style={{ alignItems: 'center' }}>
                <Image source={require('../../../assets/img/icons/Play-White.png')}   style={{width:65,height:65}} />
            </View> */}
          </ImageBackground>
          <View style={{ backgroundColor: '#fff', height: 50,}}>
              <LinkOpetion />
          </View>
          <View style={[styles.container,{padding: 15}]}>
            {/* <View style={{  padding: 15,}}>
              <Text style={{ color: 'black', textAlign: 'center' }}>
                {data.PrivateEvent ? <Icon size={18} style={s.padding} name='bullhorn' /> : <Icon size={18} style={s.padding} name='bullhorn' /> }
                {data.PrivateEvent ? 'Private Event' : 'Public Event '}
              </Text>
            </View> */}
            <Text style={[s.blueText, { textAlign: 'left',fontWeight:'bold', marginBottom: 20, fontSize: 20, textTransform: 'capitalize' }]}>{data.title}</Text>
            <View style={[s.flexRow,{paddingVertical:10}]}>
            <Image style={{width:20,height:20,}} source={require('../../../assets/img/icons/clock.png')} />
              <Text  style={[{ fontSize: 17 ,textAlign:'left'},s.paddingLeft]}>{moment(data.startDate).format("MMM Do")} at {moment(data.startTime).format('LT')} - {moment(data.endDate).format("MMM Do")} at {moment(data.endTime).format('LT')}</Text>
            </View>
            <View style={[s.flexRow,{paddingVertical:10}]}>
            <Image style={{width:14,height:20,}} source={require('../../../assets/img/icons/marketMap.png')} />
              <Text style={[{ fontSize: 17 ,textAlign:'left'},s.paddingLeft]}>{data.address!=undefined?data.address.name:'Loading..'}</Text>
            </View>
            <View style={[s.flexColumn,s.spaceBetween,{paddingVertical:10}]}>
              <Image style={{width:22,height:14,}} source={require('../../../assets/img/icons/users.png')} />
              <Text style={[{ fontSize: 17 ,textAlign:'left'},s.paddingLeft]}>110 going or intrested icluding Hindi, Shani and Shon</Text>
            </View>
            <Text style={[s.greenText]}>Details</Text>
            <Text style={[s.t1, { textAlign: 'left', }]}>{data.description}</Text>
          </View>

        </View>
        <SeparationLine />
        <CommentPost />
        <FriendsFeedback />
        <SeparationLine />
        <MapEvent description={data.description} location={data.location} title={data.title} />
      </ScrollView>
    )
  }
}


EventScreen.propTypes = {
  data: PropTypes.object.isRequired
};



const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 170,
    marginLeft: 15,
    marginTop: 5,
  },
  container: {
    flex: 1,
    color: "#FFFFFF",
  },
  title: {
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  widthImg: {
    borderRadius: 5,
    flex: 1,
    width: '100%',
  },
  box: {
    height: 200,
    padding: 0,
  },
  widthImg2: {
    width: '100%',
    borderRadius: 5,
  },
  maxWidthRow: {
    maxHeight: 150,
  },
  ImagHeigh: {
    maxHeight: 98.5,

  },
  btn: {

    width: 120,
    color: '#31A514',
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
  profile: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  profileimg: {
    position: 'absolute',
    top: -140,
    left: 0, right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',

  },
  boxtext: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  boxinfo: {
    width: '30%',
  },
  textara: {
    fontSize: 26,
    color: '#fff',
    textAlign: 'center',
  },
  icons: {
    fontSize: 24,
    color: "#ffffff",
  },
  cont: {
    marginLeft: 7,
    marginRight: 7,
    marginTop: 30,
  },
  textder: {
    fontSize: 14,

  },
  postboxs: {
    flex: 1,
    width: '100%',
    height: 320,
    marginTop: 20,
  },
  boximg: {
    maxHeight: 175,
  },
  textfrand: {
    marginTop: 7,
    color: '#31A514',
    textTransform: 'capitalize',
  },
  textfrand2: {
    marginTop: 5,
  }

})




