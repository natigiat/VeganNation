// import React from 'react';
// import {Platform, StyleSheet, FlatList, Text, View , Image , Dimensions , ImageBackground }  from 'react-native';
// import FAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// import Contacts from 'react-native-contacts';
// import Camera from 'react-native-camera';








// export class FriendsScreen extends React.Component {

//   render() {
//     return (
//       <View style={styles.container}>
//         <Camera
//           ref={(cam) => {
//             this.camera = cam;
//           }}
//           style={styles.preview}
//           aspect={Camera.constants.Aspect.fill}>
//           <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
//         </Camera>
//       </View>
//     );
//   }

//   render() {
//     const { imageUri } = this.state;
//     if (imageUri) {
//       return <ImageBackground source={imageUri}/>;
//     }
//   }
  
//   takePicture() {
//     const options = {}
//     const { uri } = this.camera.takePictureAsync()
//     this.setState({ imageUri: uri });
//     //options.location = ...
//     this.camera.capture({metadata: options})
//       .then((data) => console.log(data))
//       .catch(err => console.error(err));
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center'
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     color: '#000',
//     padding: 10,
//     margin: 40
//   }
// });



