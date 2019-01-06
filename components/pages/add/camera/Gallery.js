import React, {Component} from 'react';
import {View, Text, StyleSheet, CameraRoll, ScrollView, TouchableOpacity, Button, Image} from 'react-native';
import Permissions from 'react-native-permissions'
import PhotoGrid from 'react-native-image-grid';


class GalleryScreen extends Component {
  state = {
    images: [],
    defType: 500
  }

  componentDidMount() {
    this.permitFunc();
  }

  async permitFunc() {
    const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status !== 'granted') {
      alert('no');
    } else {
        CameraRoll.getPhotos({first: this.state.defType})
        .then(res => {
          const asset = res.edges;
          const images = asset.map(asset => asset.node.image);
          return images;
        })
        .then(response => {
          this.setState({
            images: response,
            defType: this.state.defType+1
          });
        })
        .catch(err => alert(err));
    }
  }

  _cameraRollControl() {
    
  }
  

  renderItem(item, itemSize, itemPaddingHorizontal) {
    //Single item of Grid
    return (
      <TouchableOpacity
        key={item.id}
        style={{
          width: itemSize,
          height: itemSize,
          paddingHorizontal: itemPaddingHorizontal,
        }}
        onPress={() => {
          this.ShowModalFunction(true, item.src);
        }}>
        <Image
          resizeMode="cover"
          style={{ flex: 1 }}
          source={{ uri: item.uri }}
        />
      </TouchableOpacity>
    );
  }


  render() {
    return (
      <View style={{flex:1, flexDirection:'column', justifyContent:'center' }}>
        <ScrollView>
           <PhotoGrid
              data={this.state.images}
              itemsPerRow={3}
              //You can decide the item per row
              itemMargin={1}
              itemPaddingHorizontal={1}
              renderHeader={this.renderHeader}
              renderItem={this.renderItem.bind(this)}
            />
        </ScrollView>
      </View>
    );
  }
}

export default GalleryScreen;


const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 20,
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 9,
    right: 9,
    position: 'absolute',
  },
});
