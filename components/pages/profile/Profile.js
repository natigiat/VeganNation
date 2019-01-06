import React, { Component } from 'react';
import {  StyleSheet, FlatList, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Container, Content,  Text, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Col,  Grid } from 'react-native-easy-grid';
import { Btnall } from '../../componentAsset/Btnall';
import Dialog, { DialogContent, DialogButton } from 'react-native-popup-dialog';
import len from 'object-length';

import PostButtons from '../../nav/components/PostButtons';




var s = require('../style');


// loopback-sdk
export class ProfileScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      user: [],
      posts: [],
      visible: false,
      totalFollowing: 0,
      totalFollowers: 0,
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ isReady: true });


    const { navigation } = this.props;
    const userId = navigation.getParam('userId', global.userId);

    const GETAllPosts = "http://68.183.209.228:3000/api/Accounts/" + userId + "/?filter[include]=posts";
    fetch(GETAllPosts)
      .then(response => response.text())
      .then(JSON.parse)
      .then(user => this.setState({ user }));
    
    const GETSumFollow = "http://68.183.209.228:3000/api/accounts/" + userId + "/profile";
      fetch(GETSumFollow)
        .then(response => response.text())
        .then(JSON.parse)
        .then(user => this.setState({ totalFollowing: user.result[0].totalFollowing  , totalFollowers: user.result[0].totalFollowers }));
  }





  renderItem = ({ item, index }) => {
    let Title;
    if (item.title !== undefined) {
       Title = <Text style={styles.textfrand}> {item.title} </Text>
    } 
    return (
      <View style={styles.container}>

        <TouchableHighlight onPress={() => {
          /* 1. Navigate to the Details route with params */
          this.props.navigation.navigate('Details', {
            itemId: item.id,
            contentType: "posts",
          });
        }}>
          <Col style={styles.postboxs} >
            <Image style={[styles.widthImg2, styles.widthImg, styles.boximg]} source={{ uri: item.mainImage }} />
            <View style={{ marginTop: 5 }}>
              <PostButtons style={{ height: '100%' }} />
            </View>
          
            {Title}
            <Text style={styles.textfrand2}> {item.description} </Text>
          </Col>

        </TouchableHighlight>



      </View>
    );
  }




  render() {
    const User = this.state.user;
    const UserPostLength = len(User.posts);
    const Posts = User.posts;

    console.log(this.state.totalFollowing)
    console.log(this.state.totalFollowers)
    return (
      <Container style={styles.container}>
        <Content >




          <View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50, padding: 7 }}>
              <LinearGradient
                colors={['#31A514', '#32E9E9']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                location={[0.25, 0.4, 1]}
                style={{ alignItems: 'center', borderRadius: 5, width: '100%' }}>


                <View style={styles.profileimg}>
                  <Image
                    style={{ borderColor: '#31A514', borderWidth: 2, borderRadius: 60, width: 60, height: 60 }}
                    source={{ uri: User.profileImage }}

                  />
                </View>

                <Text style={styles.profile}>
                  {User.firstName} {User.lastName}
                </Text>

                <View style={styles.boxtext}>

                  <View style={styles.boxinfo}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FollowTabs')}>
                      <Text style={[styles.textara, styles.textbold]}><Icon name="people" style={styles.icons} />{this.state.totalFollowing}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FollowTabs')}>
                      <Text style={[styles.textara, styles.textder,]}>FOLLOWING </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.boxinfo}>
                    <Text style={[styles.textara, styles.textbold]}><Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/vgniconwhet.png')} /> 1234 </Text>
                    <Text style={[styles.textara, styles.textder]}>VEGAN POINTS </Text>
                  </View>

                  <View style={styles.boxinfo}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FollowTabs')}>
                      <Text style={[styles.textara, styles.textbold]}><Icon name="people" style={styles.icons} />{this.state.totalFollowers}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FollowTabs')}>
                      <Text style={[styles.textara, styles.textder]}>FOLLOWERS</Text>
                    </TouchableOpacity>
                  </View>



                </View>



              </LinearGradient>
            </View>
          </View>

          <View style={styles.container}>
            <Dialog
              visible={this.state.visible}
              onTouchOutside={() => {
                this.setState({ visible: false });
              }}
              actions={[
                <DialogButton
                  text="Close"
                  onPress={() => { this.setState({ visible: false }) }}
                />,
              ]}
            >
              <DialogContent>
                <Text>TEXT transparent</Text>
              </DialogContent>
            </Dialog>
          </View>



          <View style={styles.cont}>

            <Text style={styles.title}>{User.firstName} Images</Text>
            <Grid>



              <Col>
                <Col style={[styles.space, styles.col1, styles.maxWidthRow]}>
                  <Image style={[styles.widthImg2, styles.widthImg]} source={{ uri: Posts !== 'undefined' && UserPostLength > 3 ? Posts[UserPostLength - 4].mainImage : "https://www.verdict.co.uk/wp-content/uploads/2017/08/shutterstock_413417941-1440x956.jpg" }} />
                </Col>
                <Col style={[styles.space, styles.col1, styles.maxWidthRow]}>
                  <Image style={[styles.widthImg2, styles.widthImg]} source={{ uri: Posts !== 'undefined' && UserPostLength > 4 ? Posts[UserPostLength - 5].mainImage : "https://www.verdict.co.uk/wp-content/uploads/2017/08/shutterstock_413417941-1440x956.jpg" }} />
                </Col>
              </Col>

              <Col>
                <Col style={[styles.space, styles.col1, styles.ImagHeigh]}>
                  <Image style={styles.widthImg} source={{ uri: Posts !== 'undefined' && UserPostLength > 0 ? Posts[UserPostLength - 1].mainImage : "https://www.verdict.co.uk/wp-content/uploads/2017/08/shutterstock_413417941-1440x956.jpg" }} />
                </Col>
                <Col style={[styles.space, styles.col1, styles.ImagHeigh]}>
                  <Image style={styles.widthImg} source={{ uri: Posts !== 'undefined' && UserPostLength > 1 ? Posts[UserPostLength - 2].mainImage : "https://www.verdict.co.uk/wp-content/uploads/2017/08/shutterstock_413417941-1440x956.jpg" }} />
                </Col>
                <Col style={[styles.space, styles.col1, styles.ImagHeigh]}>
                  <Image style={styles.widthImg} source={{ uri: Posts !== 'undefined' && UserPostLength > 2 ? Posts[UserPostLength - 3].mainImage : "https://www.verdict.co.uk/wp-content/uploads/2017/08/shutterstock_413417941-1440x956.jpg" }} />
                </Col>
              </Col>


            </Grid>


            <View style={styles.container} style={{ marginTop: 15 }}>
              <Btnall
                text="See All Images"
                onPress={() => { this._handlePress() }}
              />
            </View>
          </View>

          <View style={s.bordergray} ></View>

          <View style={styles.cont}>
            <Text style={styles.title}>{User.firstName}  POST'S</Text>
            <Grid>
              <Col>

                <FlatList
                  data={User.posts}
                  style={styles.box}
                  renderItem={this.renderItem}
                  keyExtractor={(item, index) => index.toString()}
                />

              </Col>
            </Grid>
          </View>



        </Content>
      </Container>
    );
  }
}





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
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
  },
  widthImg: {
    borderRadius: 3,
    flex: 1,
    width: '100%',
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
    fontSize: 24,
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
    marginTop: 15,
  },
  textder: {
    fontSize: 14,
  },
  postboxs: {
    flex: 1,
    width: '100%',
    height: 450,
    // borderBottomColor: '#31A514',
    // borderBottomWidth: 0.3,
    paddingBottom: 40,
    paddingTop: 0,
  },
  boximg: {
    flex: 1,
    width: null,
    height: null,
  },
  textfrand: {
    color: '#31A514',
    textTransform: 'capitalize',
    marginTop: 40,
  },
  textfrand2: {
    marginTop: 35,
  },
  textbold: {
    fontWeight: 'bold',
  }

})




