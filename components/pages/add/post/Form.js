import React from 'react';
import { Content, Form, Textarea } from 'native-base';
import { StyleSheet, Image, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import AutogrowInput from 'react-native-autogrow-input';
import BtnLog from '../../../componentAsset/BtnLog';
import { withNavigation } from 'react-navigation';
var s = require('../../style');

class AddPostScreen extends React.Component {

  constructor(props) {
    super(props)

    const { navigation } = this.props;
    // byts64 image only for privew
    let imageUrl = navigation.getParam('imageUrl', 'NO-ID');

    this.state = {
      descriptionText: '',
      imageUrl: imageUrl,
    }
  }


  addPost() {
      
      let postImg = global.postImg;
      postImg = "https://d2ghhown8o5o0g.cloudfront.net/" + postImg.split("/").pop();

      fetch('http://68.183.209.228:3000/api/posts', {
    		  method: 'POST',
    		  headers: {
    		    Accept: 'application/json',
    		    'Content-Type': 'application/json',
    		  },
    		  body: JSON.stringify({
            userId: global.userId,
    		    mainImage: postImg,
            description: this.state.descriptionText,
            contentType:"post"
  		  }) 
  		})
      .then((response) => response.json())
      .then((responseJson) => {

        //  after saving post transfer to detail page woth tempere file 64byts
        this.props.navigation.navigate('Details', {
          itemId: responseJson.id,
          contentType: "posts",
          bytsImags: this.state.imageUrl
        });

      })
      .catch((error) => {
        console.error(error);
      })
  }



  _handlePress() {
    this.props.navigation.navigate('Home')
  }




  render() {
    let mainImg = this.state.imageUrl;
    // console.log(mainImg)
    return (
      <ImageBackground imageStyle={{ borderRadius: 5 }} source={{ uri: `data:image/jpeg;base64,${mainImg}` }} style={styles.backgroundImg} >

        <View style={styles.topBarLeft}>

          <TouchableOpacity style={styles.backImg} onPress={() => { this.props.navigation.navigate('Camera') }}>
            <Image
              style={[s.imageFull, { width: 29, height: 29 }]}
              source={require('../../../../assets/img/camera/back.png')}
            />
          </TouchableOpacity>
        </View>


        <AutogrowInput
          onChangeText={(text) => this.setState({ descriptionText: text })}
          style={styles.textInput}
          autoFocus
          defaultHeight={50}
        /* all props supported by original TextInput components are supported */
        />

        <TouchableOpacity
          style={[styles.btnPress, s.center]}
          onPress={() => { this.addPost() }}
        >

          <Text style={[styles.textBtn]}>Send</Text>
          {/* <Ionicons name="send-o" size={32} color="#000" /> */}
        </TouchableOpacity>

      </ImageBackground>

    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    resizeMode: 'contain',
  },
  logo: {
    height: 50,
    width: 170,
    marginLeft: 15,
    marginTop: 5,
  },
  backgroundImg: {
    flex: 1
  },
  box: {
    height: 400,
    padding: 20,
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
  topBarLeft: {
    position: "absolute",
    left: 0,
    top: 5,
    width: 80,
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
  },
  backImg: {
    flex: 0.45,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    padding: 5,
  },
  space: {
    margin: 2,
    backgroundColor: '#00CE9F'
  },
  textInput: {
    fontSize: 50,
    color: "#fff",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 30
  },
  col1: {
    height: 200, marginRight: 2
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 'auto'
  },

  userImg: {
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#31c58d',
    borderWidth: 1,
    borderRadius: 70,
    borderColor: '#31c58d',
    width: 100, height: 50
  },
  btnPress: {
    position: 'absolute',
    width: 80,
    height: 30,
    right: 10,
    borderWidth: 1,
    borderRadius: 70,
    bottom: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderColor: 'transparent',
  },
  textBtn: {
    textAlign: 'center',
    color: '#31c58d',
  }
})


export default withNavigation(AddPostScreen);











