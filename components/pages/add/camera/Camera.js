import React from 'react';
import Carousel from 'react-native-snap-carousel';



import { withNavigation } from 'react-navigation';
import { Alert, StyleSheet, Text, View, Image, TouchableOpacity, Slider, Platform, ScrollView , ImageStore } from 'react-native';
import { Ionicons, MaterialIcons, Foundation, MaterialCommunityIcons, Octicons } from 'react-native-vector-icons';




var s = require('../../style');
import { RNS3 } from 'react-native-aws3';


import Permissions from 'react-native-permissions'
import { RNCamera } from 'react-native-camera';


const landmarkSize = 2;

const flashModeOrder = {
  off: 'on',
  on: 'auto',
  auto: 'torch',
  torch: 'off',
};

const flashIcons = {
  off: 'flash-off',
  on: 'flash-on',
  auto: 'flash-auto',
  torch: 'highlight'
};

const wbOrder = {
  auto: 'sunny',
  sunny: 'cloudy',
  cloudy: 'shadow',
  shadow: 'fluorescent',
  fluorescent: 'incandescent',
  incandescent: 'auto',
};

const wbIcons = {
  auto: 'wb-auto',
  sunny: 'wb-sunny',
  cloudy: 'wb-cloudy',
  shadow: 'beach-access',
  fluorescent: 'wb-iridescent',
  incandescent: 'wb-incandescent',
};
let motod = this.myCustomAnimatedValue = false

class CameraScreen extends React.Component {
  



  state = {
    flash: 'off',
    zoom: 0,
    autoFocus: 'on',
    type: 'front',
    whiteBalance: 'incandescent',
    ratio: '16:9',
    ratios: [],
    contentType: 'AddPost',
    barcodeScanning: false,
    faceDetecting: false,
    faces: [],
    newPhotos: false,
    permissionsGranted: false,
    pictureSize: undefined,
    pictureSizes: [],
    pictureSizeId: 0,
    showGallery: false,
    showMoreOptions: false,
    entries: [
      { title: "fealling" },
      { title: "Video" },
      { title: "regular" },
      { title: "recipe" },
      { title: "event" },
    ],
  };

  async componentWillMount() {
    // const { status } = await Permissions.askAsync(Permissions.CAMERA);

    Permissions.request('camera').then(response => {
      // Returns once the user has chosen to 'allow' or to 'not allow' access
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      console.log(response)
      this.setState({ permissionsGranted: true })
    })

    // this.setState({ permissionsGranted: status === 'granted' });
  }



  componentDidMount() {
    // FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
    //   console.log(e, 'Directory exists');
    // });
  }

  getRatios = async () => {
    const ratios = await this.camera.getSupportedRatios();
    return ratios;
  };



  toggleMoreOptions = () => this.setState({ showMoreOptions: !this.state.showMoreOptions });

  toggleFacing = () => this.setState({ type: this.state.type === 'back' ? 'front' : 'back' });

  toggleFlash = () => this.setState({ flash: flashModeOrder[this.state.flash] });

  setRatio = ratio => this.setState({ ratio });

  toggleWB = () => this.setState({ whiteBalance: wbOrder[this.state.whiteBalance] });

  toggleFocus = () => this.setState({ autoFocus: this.state.autoFocus === 'on' ? 'off' : 'on' });

  zoomOut = () => this.setState({ zoom: this.state.zoom - 0.1 < 0 ? 0 : this.state.zoom - 0.1 });

  zoomIn = () => this.setState({ zoom: this.state.zoom + 0.1 > 1 ? 1 : this.state.zoom + 0.1 });

  setFocusDepth = depth => this.setState({ depth });

  toggleBarcodeScanning = () => this.setState({ barcodeScanning: !this.state.barcodeScanning });

  toggleFaceDetection = () => this.setState({ faceDetecting: !this.state.faceDetecting });

  takePicture = () => {
    console.log("onPictureSaved")
    if (this.camera) {
      const options = {
        quality: 1,
        onPictureSaved: this.onPictureSaved
      }
      this.camera.takePictureAsync(options);
    }
  };

  handleMountError = ({ message }) => console.error(message);

  onPictureSaved = async photo => {
    
    console.log("onPictureSaved")

    let localUri = photo.uri;
    let filename = localUri.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let file = {
      uri: localUri,
      name: filename,
      type: type
    }

    ImageStore.getBase64ForTag(localUri, (data) => {
      this.props.navigation.navigate(this.state.contentType, {
        imageUrl :data,
      });
    }, base64Img => console.warn("getBase64ForTag: ", base64Img));


    const options = {
      keyPrefix: "images/",
      bucket: "veganasset",
      region: "us-east-2",
      accessKey: "AKIAJDRPIQF5L37SNLBQ",
      secretKey: "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",
      successActionStatus: 201
    }


    RNS3.put(file, options).then(response => {
      if (response.status == 201) {
        console.log("Upload image to S3")
        console.log("---------------------------------------------------------------------");
        let postImg = response.body.postResponse.location;
        this.setState({ newPhotos: true });

        global.postImg = postImg;

      } else {
        console.log("Failed to upload image to S3");
        console.log(response);
      }

    });


  }

  onBarCodeScanned = code => {
    this.setState(
      { barcodeScanning: !this.state.barcodeScanning },
      Alert.alert(`Barcode found: ${code.data}`)
    );
  };

  onFacesDetected = ({ faces }) => this.setState({ faces });
  onFaceDetectionError = state => console.warn('Faces detection error:', state);

  collectPictureSizes = async () => {
    if (this.camera) {
      const pictureSizes = await this.camera.getAvailablePictureSizesAsync(this.state.ratio);
      let pictureSizeId = 0;
      if (Platform.OS === 'ios') {
        pictureSizeId = pictureSizes.indexOf('High');
      } else {
        // returned array is sorted in ascending order - default size is the largest one
        pictureSizeId = pictureSizes.length - 1;
      }
      this.setState({ pictureSizes, pictureSizeId, pictureSize: pictureSizes[pictureSizeId] });
    }
  };

  previousPictureSize = () => this.changePictureSize(1);
  nextPictureSize = () => this.changePictureSize(-1);

  changePictureSize = direction => {
    let newId = this.state.pictureSizeId + direction;
    const length = this.state.pictureSizes.length;
    if (newId >= length) {
      newId = 0;
    } else if (newId < 0) {
      newId = length - 1;
    }
    this.setState({ pictureSize: this.state.pictureSizes[newId], pictureSizeId: newId });
  }

  changeContentType(contentTypeName){
    this.setState({ contentType: contentTypeName });
  }

  renderFace({ bounds, faceID, rollAngle, yawAngle }) {
    return (
      <View
        key={faceID}
        transform={[
          { perspective: 600 },
          { rotateZ: `${rollAngle.toFixed(0)}deg` },
          { rotateY: `${yawAngle.toFixed(0)}deg` },
        ]}
        style={[
          styles.face,
          {
            ...bounds.size,
            left: bounds.origin.x,
            top: bounds.origin.y,
          },
        ]}>
        <Text style={styles.faceText}>ID: {faceID}</Text>
        <Text style={styles.faceText}>rollAngle: {rollAngle.toFixed(0)}</Text>
        <Text style={styles.faceText}>yawAngle: {yawAngle.toFixed(0)}</Text>
      </View>
    );
  }

  renderLandmarksOfFace(face) {
    const renderLandmark = position =>
      position && (
        <View
          style={[
            styles.landmark,
            {
              left: position.x - landmarkSize / 2,
              top: position.y - landmarkSize / 2,
            },
          ]}
        />
      );
    return (
      <View key={`landmarks-${face.faceID}`}>
        {renderLandmark(face.leftEyePosition)}
        {renderLandmark(face.rightEyePosition)}
        {renderLandmark(face.leftEarPosition)}
        {renderLandmark(face.rightEarPosition)}
        {renderLandmark(face.leftCheekPosition)}
        {renderLandmark(face.rightCheekPosition)}
        {renderLandmark(face.leftMouthPosition)}
        {renderLandmark(face.mouthPosition)}
        {renderLandmark(face.rightMouthPosition)}
        {renderLandmark(face.noseBasePosition)}
        {renderLandmark(face.bottomMouthPosition)}
      </View>
    );
  }

  renderFaces = () =>
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.faces.map(this.renderFace)}
    </View>

  renderLandmarks = () =>
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.faces.map(this.renderLandmarksOfFace)}
    </View>

  renderNoPermissions = () =>
    <View style={styles.noPermissions}>
      <Text style={{ color: 'white' }}>
         Camera permissions not granted - cannot open camera preview.
      </Text>
    </View>

  renderTopBar = () =>
    <View style={styles.topNav}>


      <View style={styles.topBarLeft}>

        <TouchableOpacity style={styles.backImg} onPress={() => { this.props.navigation.navigate('Home') }}>
          <Image
            style={[s.imageFull, { width: 29, height: 29 }]}
            source={require('../../../../assets/img/camera/back.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.topBarRight}>

        <TouchableOpacity style={styles.actionBar} onPress={this.toggleFacing}>
          <Image
            style={[s.imageFull, { width: 33, height: 33 }]}
            source={require('../../../../assets/img/camera/switch.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBar} onPress={this.toggleFlash}>
          <Image
            style={[s.imageFull, { width: 33, height: 33 }]}
            source={require('../../../../assets/img/camera/flash.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.galleryOpen}>

        <TouchableOpacity style={styles.backImg} onPress={() => { this.props.navigation.navigate('Gallery') }}>
          <Image
            style={[s.imageFull, s.center, { width: 23, height: 23, bottom: 8, left: 4 }]}
            source={require('../../../../assets/img/camera/gallery.png')}
          />
        </TouchableOpacity>
      </View>

    </View>



  renderBottomBar = () =>



    <View

      style={styles.bottomBar}>
      {/*more option*/}
      {/*<TouchableOpacity style={styles.bottomButton} onPress={this.toggleMoreOptions}>
        <Octicons name="kebab-horizontal" size={30} color="white"/>
      </TouchableOpacity>*/}




      <TouchableOpacity style={styles.bottomButton} onPress={() => { this.props.navigation.navigate('Home') }}>
        <Image
          style={styles.bottomButtonImg}
          source={require('../../../../assets/img/camera/feed.png')}
        />
      </TouchableOpacity>


      <View style={{ flex: 0.4 }}>
        <TouchableOpacity
          onPress={this.takePicture}
          style={{ alignSelf: 'center' }}
        >
          <Image borderRadius={5} style={{ width: 60, height: 60 }} source={require('../../../../assets/img/camera/main.png')} />

        </TouchableOpacity>
      </View>



      <TouchableOpacity style={styles.bottomButton} onPress={() => { this.props.navigation.navigate('Freiend') }}>
        <Image
          style={styles.bottomButtonImg2}
          source={require('../../../../assets/img/camera/friends.png')}
        />
      </TouchableOpacity>






      {/*<TouchableOpacity style={styles.bottomButton} onPress={this.toggleView}>
        <View>
          <Foundation name="thumbnails" size={30} color="white" />
          {this.state.newPhotos && <View style={styles.newPhotosDot}/>}
        </View>
      </TouchableOpacity>*/}
    </View>






  renderBottomTextBar = () =>


    <View

      style={styles.sliderText}>
      <ScrollView
        onScroll={event => {
          let yOffset = event.nativeEvent.contentOffset.x;

          console.log(yOffset)
       
        }}
        directionalLockEnabled={false}
        horizontal={true}
      >
        
        
        <TouchableOpacity style={styles.btnWrapper} onPress={() => this.changeContentType("AddPost")} >
                <Text style={styles.sliderTextEl}>Post</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnWrapper} onPress={() => this.changeContentType("AddRecipe")} >
                <Text style={styles.sliderTextEl}>Recipe</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnWrapper}  onPress={() => this.changeContentType("AddEvent")} >
                <Text style={styles.sliderTextEl}>Event</Text>
        </TouchableOpacity>
        

      </ScrollView>
    </View>

  renderBottomTextBarIcon = () =>

    <View style={styles.iconSlider}>
      <Ionicons name="md-arrow-dropup" size={24} color="white" />
    </View>



  renderMoreOptions = () =>
    (
      <View style={styles.options}>
        <View style={styles.detectors}>
          <TouchableOpacity onPress={this.toggleFaceDetection}>
            <MaterialIcons name="tag-faces" size={32} color={this.state.faceDetecting ? "white" : "#858585"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleBarcodeScanning}>
            <MaterialCommunityIcons name="barcode-scan" size={32} color={this.state.barcodeScanning ? "white" : "#858585"} />
          </TouchableOpacity>
        </View>

        <View style={styles.pictureSizeContainer}>
          <Text style={styles.pictureQualityLabel}>Picture quality</Text>
          <View style={styles.pictureSizeChooser}>
            <TouchableOpacity onPress={this.previousPictureSize} style={{ padding: 6 }}>
              <Ionicons name="md-arrow-dropleft" size={14} color="white" />
            </TouchableOpacity>
            <View style={styles.pictureSizeLabel}>
              <Text style={{ color: 'white' }}>{this.state.pictureSize}</Text>
            </View>
            <TouchableOpacity onPress={this.nextPictureSize} style={{ padding: 6 }}>
              <Ionicons name="md-arrow-dropright" size={14} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );

  renderCamera = () =>
    (
      <View style={{ flex: 1 }}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.camera}
          onCameraReady={this.collectPictureSizes}
          type={this.state.type}
          flashMode={this.state.flash}
          autoFocus={this.state.autoFocus}
          zoom={this.state.zoom}
          whiteBalance={this.state.whiteBalance}
          ratio={this.state.ratio}
          pictureSize={this.state.pictureSize}
          mirrorImage={false}
          onMountError={this.handleMountError}
          onFacesDetected={this.state.faceDetecting ? this.onFacesDetected : undefined}
          onFaceDetectionError={this.onFaceDetectionError}
          mirrorImage={true}
          fixOrientation={true}
          onBarCodeScanned={this.state.barcodeScanning ? this.onBarCodeScanned : undefined}

          
        >
          {this.renderTopBar()}
          {this.renderBottomBar()}
          {this.renderBottomTextBar()}
          {/* {this.renderBottomTextBarIcon()}  */}






        </RNCamera>
        {/* {this.state.faceDetecting && this.renderFaces()}
        {this.state.faceDetecting && this.renderLandmarks()}
        {this.state.showMoreOptions && this.renderMoreOptions()} */}
      </View>
    );

  render() {
    const cameraScreenContent = this.state.permissionsGranted
      ? this.renderCamera()
      : this.renderNoPermissions();
    const content = cameraScreenContent;
    return <View style={styles.container}>{content}</View>;
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topNav: {
    flexDirection: 'row',
  },
  topBarLeft: {
    position: "absolute",
    left: 0,
    top: 5,
    width: 80,
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
  },
  topBarRight: {
    position: "absolute",
    right: 20,
    top: 35,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
  },
  actionBar: {
    width: 30,
    height: 30,
    marginBottom: 15,
    right: 0,
  },
  bottomBar: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    flex: 0.12,
    flexDirection: 'row',
    marginBottom: 45,
  },
  noPermissions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  gallery: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  galleryOpen: {
    position: 'absolute',
    width: 40,
    height: 80,
    right: 0,
    top: 300,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000a6',
    borderTopLeftRadius: 64,
    borderBottomLeftRadius: 64
  },
  toggleButton: {
    flex: 0.25,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backImg: {
    flex: 0.45,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    padding: 5,
  },
  autoFocusLabel: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  bottomButton: {
    flex: 0.3,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonImg: {
    width: 29,
    height: 32
  },

  bottomButtonImg2: {
    width: 47,
    height: 27
  },
  sliderText: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    zIndex: 7,
    flex: 1,
  },
  sliderTextEl: {
    color: "#fff",
    paddingRight: 20,
    paddingLeft: 20,
    width: 90,
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  iconSlider: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    textAlign: 'center'
  },
  newPhotosDot: {
    position: 'absolute',
    top: 0,
    right: -5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4630EB'
  },
  options: {
    position: 'absolute',
    bottom: 80,
    left: 30,
    width: 200,
    height: 160,
    backgroundColor: '#000000BA',
    borderRadius: 4,
    padding: 10,
  },
  detectors: {
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pictureQualityLabel: {
    fontSize: 10,
    marginVertical: 3,
    color: 'white'
  },
  pictureSizeContainer: {
    flex: 0.5,
    alignItems: 'center',
    paddingTop: 10,
  },
  pictureSizeChooser: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  pictureSizeLabel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  facesContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  face: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#FFD700',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  landmark: {
    width: landmarkSize,
    height: landmarkSize,
    position: 'absolute',
    backgroundColor: 'red',
  },
  faceText: {
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
  },
  slide: {
    zIndex: 12
  }
});

export default withNavigation(CameraScreen);