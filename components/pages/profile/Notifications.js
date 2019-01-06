import React, { Component } from 'react';
import { Platform, StyleSheet, FlatList, View, Image, Text, Container, Header, Content, Button, ScrollView, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';





var s = require('../style');

const datatast = [
  {
    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmUrErucWQ5t_G-8pIwXIJKXzC19WFu4g6z6wne9Hv7cJFC8L",
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat ",
    "body": "quia et sunrem eveniet architecto aperiam non debitis po"
  },
  {
    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmUrErucWQ5t_G-8pIwXIJKXzC19WFu4g6z6wne9Hv7cJFC8L",
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore qeiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmUrErucWQ5t_G-8pIwXIJKXzC19WFu4g6z6wne9Hv7cJFC8L",
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat ",
    "body": "quia et sunrem eveniet architecto aperiam non debitis po"
  },
  {
    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmUrErucWQ5t_G-8pIwXIJKXzC19WFu4g6z6wne9Hv7cJFC8L",
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore qeiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmUrErucWQ5t_G-8pIwXIJKXzC19WFu4g6z6wne9Hv7cJFC8L",
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat ",
    "body": "quia et sunrem eveniet architecto aperiam non debitis po"
  },
  {
    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmUrErucWQ5t_G-8pIwXIJKXzC19WFu4g6z6wne9Hv7cJFC8L",
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore qeiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmUrErucWQ5t_G-8pIwXIJKXzC19WFu4g6z6wne9Hv7cJFC8L",
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat ",
    "body": "quia et sunrem eveniet architecto aperiam non debitis po"
  },
  {
    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmUrErucWQ5t_G-8pIwXIJKXzC19WFu4g6z6wne9Hv7cJFC8L",
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore qeiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmUrErucWQ5t_G-8pIwXIJKXzC19WFu4g6z6wne9Hv7cJFC8L",
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat ",
    "body": "quia et sunrem eveniet architecto aperiam non debitis po"
  },
  {
    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmUrErucWQ5t_G-8pIwXIJKXzC19WFu4g6z6wne9Hv7cJFC8L",
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore qeiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmUrErucWQ5t_G-8pIwXIJKXzC19WFu4g6z6wne9Hv7cJFC8L",
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat ",
    "body": "quia et sunrem eveniet architecto aperiam non debitis po"
  },
  {
    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmUrErucWQ5t_G-8pIwXIJKXzC19WFu4g6z6wne9Hv7cJFC8L",
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore qeiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },

]


// loopback-sdk
export class NotificationsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoading: true,
      comments: this.props.data,
      showCancel: true,
      index: null,

    }


  }





  renderItem = ({ item, index }) => {
    // var timestamp = moment(item.timestamp).calendar();
    return (

      <View style={styles.BoxItam}>
        <View style={styles.profileInfo}>
          <View style={s.flexRow}>
            <Image style={styles.imgurl} source={{ uri: item.imgurl }} />
            <View style={styles.boxtext}>
              <Text style={[styles.paddingText, styles.fontWeight, styles.textbold]}>{item.title}</Text>
              <Text style={[styles.fontWeight]}>{item.body}</Text>
            </View>
          </View>
          <Text style={[s.greenText, styles.paddingText]}>22/22/22</Text>
        </View>

      </View>


    )
  }




  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          removeClippedSubviews={false}
        >
          <FlatList
            data={datatast}
            // extraData={this.state.comment}
            renderItem={this.renderItem}
            style={styles.flat}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>

      </View>
    )
  }
}


const styles = StyleSheet.create({

  container: {

    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    marginBottom: 20,
  },
  marginRight: {
    marginRight: 5
  },
  paddingText: {
    padding: 5,
  },
  textbold: {
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 7,
    paddingBottom: 7
  },
  fontWeight: {
    fontSize: 15,
  },
  boxtext: {
    padding: 3
  },
  commentsBox: {
    marginTop: 5
  },
  imgurl: {
    width: 57,
    height: 57,
    borderRadius: 64,
    borderColor: '#31A514',
    borderWidth: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoxItam: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginTop: 7
  }

})


export default withNavigation(NotificationsScreen);
