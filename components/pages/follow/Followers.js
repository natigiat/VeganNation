import React, { Component } from 'react';
import { Linking, Share, Image, Text, View, StyleSheet, Alert, FlatList, ImageBackground, RefreshControl ,ScrollView, TouchableWithoutFeedback ,TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
var s = require('../style');



let data = [];



class FollowersScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      accounts: [],
      fllow: {
        "userId": "5c1fb170c56bfd0f88f9fe1c",
        "followerId": "5c1fb170c56bfd0f88f9fe0e",
      }

    };
    
  }

  componentDidMount() {
    this.fetchData();
  }


  fetchData = async () => {
    fetch(`http://68.183.209.228:3000/api/follows/5c1fb170c56bfd0f88f9fe0e/followers/1`)
    .then(response => response.text())
      .then(JSON.parse)
      .then(accounts => this.setState(state => ({
          accounts: [...state.accounts , ...accounts.followers],
          loading: false
      })))
      .then(this.setState({refreshing: false}));
  }


  _onRefresh = () => {
      this.setState({ refreshing: true });
      this.fetchData();
  }

  followUser() {
      fetch('http://68.183.209.228:3000/api/follows', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state.fllow)
      })
      .then((response) => response.json())
      .then((responseJson) => {
         
        console.log("follow")
        // this.props.navigation.navigate('Details', {itemId: responseJson.id});

      })
      .catch((error) =>{
        console.error(error);
      })
  }


  renderContactsOnApp = ({ item, index }) => {
    let imageUrl = item.follower.profileImage;
    let userId = item.follower.id; 
    return (
      <View style={styles.container}>

        <TouchableHighlight onPress={() => {
            this.props.navigation.navigate('Profile', {
                userId: userId,
        }); }}>
            <Image source={{ uri: imageUrl }} style={styles.userImg} />
        
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {
            this.props.navigation.navigate('Profile', {
                userId: userId,
        }); }}>
            <Text style={styles.paragraph}>
              {item.follower.firstName} {item.follower.lastName}
            </Text>
        </TouchableHighlight>

        
        <TouchableHighlight style={styles.btnWrapper} onPress={() => { this.followUser() }}>
          <View>
            <Text style={styles.btn}>Follow</Text>
          </View>
        </TouchableHighlight>

      </View>
    );
  }


 

  render() {
    return (
      <ImageBackground source={require('../../../assets/img/friends/freindwrapper.png')} style={styles.wrapper} >

        <View>
          <Text style={styles.title}>VEGANNATION MEMBERS</Text>
          <ScrollView style={styles.scroll}>

            <FlatList
              data={this.state.accounts}
              style={styles.box}
              renderItem={this.renderContactsOnApp}
              keyExtractor={(item, index) => index.toString()}
              refreshControl={
                  <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this._onRefresh}
                  />
              }
            />

          </ScrollView>
        </View>

      </ImageBackground>

    );
  }



}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 25
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'left',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  userImg: {
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#31c58d',
    borderWidth: 2,
    borderRadius: 70,
    borderColor: '#31c58d',
    width: 40,
    height: 40,
  },

  userBack: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 70,
    width: 41,
    height: 41,
    fontSize:18,
    fontWeight:'bold',
    justifyContent: 'center', 
    alignItems: 'center',
    textAlign: 'center',
    lineHeight:41,
  },
  wrapper: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 32,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  titleBack: {
    backgroundColor: '#31c58d',
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 42,
    borderRadius: 26,
    marginRight: 10,
    marginLeft: 10,
    flexDirection: "row",
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  shareBtn: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 32,
    flex: 1,
  },
  box: {
    marginRight: 10,
    marginLeft: 10,
  },
  accounts: {
    marginRight: 10,
    marginLeft: 10,
  },
  scroll: {
    height: 810,
  },
  btnWrapper: {
    borderRadius: 70,
    borderColor: '#31c58d',
    borderWidth: 2,
    borderRadius: 70,
    borderColor: '#31c58d',
    paddingRight: 20,
    paddingLeft: 20,
    position: 'absolute',
    right: 0
  },
  btn: {
    color: "#31A514",
    textAlign: "right",
    padding:5,
    marginTop:2
  },

  item: {
    flex: 1,
  },

  action: {
    position: "absolute", right: 10, top: 10,
    fontSize: 24,
  },

  profileImage: {
    top: 0,
    marginTop: 15,
    marginLeft: 15,
    borderColor: "#F16252",
    borderWidth: 2,
    borderRadius: 50
  },
  itemText: {
    color: '#ffffff',
    fontSize: 14,
    paddingRight: 10,
    paddingLeft: 10,

    position: "absolute", bottom: 60,
  },
  linearGradient: {
    flex: 1,
  },

  shareIcon:{
    marginRight: 5
  }
})


export default withNavigation(FollowersScreen);
