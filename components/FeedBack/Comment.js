import React, { Component } from 'react';
import { Platform, StyleSheet, FlatList, View, Image, Text, ScrollView } from 'react-native';
import { Container, } from 'native-base';
import moment from 'moment';

var s = require('../pages/style');


export default class CommentPost extends React.Component {

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
    var timestamp = moment(item.timestamp).calendar();
    return (
      <View style={styles.commentBox}>
        <View style={styles.commentBox}>
          <View style={styles.profileInfo}>
            <View style={s.flexRow}>
              <Image style={styles.marginRight} source={require("../../assets/img/friends/1.png")} />
              <Text style={[s.greenText, styles.paddingText, styles.fontWeight]}>{item.email}</Text>
            </View>
            <Text style={[s.greenText, styles.paddingText]}>{timestamp}</Text>
          </View>
          <View style={styles.backgroundgreen}>
            <Text style={styles.fontWeight}>{item.bodyText}</Text>
            <Text style={[s.greenText, styles.fontWeight]}>{item.name}</Text>
          </View>
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
            data={this.props.data}
            extraData={this.state.comment}
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

  h5: {
    fontSize: 10,
    textAlign: 'center',
    flex: 1,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ECEFF1'
  },
  scroll: {
    height: 250,
    borderWidth: 0.5,
    borderColor: '#31A514',
    marginTop: 7,
  },
  container: {
    padding: 2,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'left',
    flex: 1,
    marginBottom: 20,
  },
  backgroundgreen: {
    backgroundColor: '#EAF6E7',
    // minHeight: 80,
    borderRadius: 5,
    marginBottom: 5,
    padding: 10,
  },
  marginRight: {
    marginRight: 5
  },
  paddingText: {
    padding: 5
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 7,
    paddingBottom: 7
  },
  fontWeight: {
    fontSize: 13,
  },


  commentsBox: {
    marginTop: 5
  }

})


