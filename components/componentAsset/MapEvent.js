import React, { Component } from 'react';
import { Dimensions, Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';

import { Popup ,showLocation  } from 'react-native-map-link'
import PropTypes from 'prop-types';
var s = require('../pages/style');


var { height, width } = Dimensions.get('window');
import Permissions from 'react-native-permissions'
import { MapView , Marker } from 'react-native-maps';



export default class MapEvent extends Component {
  state = {
    places: [],
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
    latitude: null,
    longitude: null,
    isVisible:false
  };

  componentDidMount() {
    this._getLocationAsync()
      .then(this.fetchData);
  }
  

  fetchData = async () => {
    // https://www.vegguide.org/search/by-lat-long/${this.state.latitude},${this.state.longitude}/filter/category_id=[1,2,3,4,5,6];veg_level=5;distance=135
    
    const UrlData = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=vegan+Restaurant&sensor=true&location=32.0879994,34.7622266&radius=50000&key=AIzaSyAnwPxEXgtd38eWkC33Dqie1pFul7nM46w`;
    console.log(UrlData)
    fetch(UrlData)
      .then(response => response.text())
      .then(JSON.parse)
      .then(places => this.setState({ places }))
  }


  regionFrom(lat, lon, accuracy) {
    const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
    const circumference = (40075 / 360) * 1000;

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = (accuracy / oneDegreeOfLongitudeInMeters);

    return {
      latitudeDelta: Math.max(0, latDelta),
      longitudeDelta: Math.max(0, lonDelta)
    };
  }

  // _getLocationAsync = async () => {


  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status !== 'granted') {
  //     this.setState({
  //       locationResult: 'Permission to access location was denied',
  //     });
  //   } else {
  //     this.setState({ hasLocationPermissions: true });
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   let latitude = location.coords.latitude;
  //   let longitude = location.coords.longitude;
  //   let accuracy = location.coords.accuracy;

  //   this.setState({ locationResult: JSON.stringify(location) });
  //   this.setState({ latitude: latitude, longitude: longitude });
  //   let getDelta = this.regionFrom(latitude, longitude, accuracy)


  //   // Center the map on the location we just fetched.
  //   this.setState({ mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: getDelta.latitudeDelta, longitudeDelta: getDelta.longitudeDelta } });
  // };
  
  OpenMap(){
    
    showLocation({
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      //sourceLatitude:  32.0944220,  // optionally specify starting location for directions
      //sourceLongitude:this.state.longitude,  // not optional if sourceLatitude is specified
      // title: 'The White House',  // optional
      // googleForceLatLon: false,  // optionally force GoogleMaps to use the latlon for the query instead of the title
      // googlePlaceId: 'ChIJGVtI4by3t4kRr51d_Qm_x58',  // optionally specify the google-place-id
      // dialogTitle: 'This is the dialog Title', // optional (default: 'Open in Maps')
      // dialogMessage: 'This is the amazing dialog Message', // optional (default: 'What app would you like to use?')
      // cancelText: 'This is the cancel button text', // optional (default: 'Cancel')
      appsWhiteList: ['google-maps','waze'] // optionally you can set which apps to show (default: will show all supported apps installed on device)
      // app: 'uber'  // optionally specify specific app to use
    })
  }


  loading() {
    return (<View><Text>Loading...</Text></View>)
  }


  renderMarkers() {
    return this.props.places.map((place, i) => (
      <Marker key={i} title={place.name} coordinate={place.coords} />
    ))
  }


  render() {
    
    const { description, title, location } = this.props
   

    if(this.state.latitude !== null){
      console.log('gdfg',location)
    return (
      <View style={[{ textAlign: 'center', position: 'relative', height: 280 }, s.padding]}>
        <View style={[{ textAlign: 'center', position: 'relative', height: 200 }, s.padding]}>
          <MapView
            style={{ height: 200, width: width - 20, borderWidth: 2, borderColor: '#3ad09d', position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }}
            region={{
              latitude: location.lat,
              longitude: location.lng,
              longitudeDelta: 0.9,
              latitudeDelta: 0.9,
            }}
          >

            <Marker
              coordinate={{
                latitude: location.lat,
              longitude: location.lng,
              }}
              title={title}
              description={description}
              image={require('../../assets/img/coinsmall.png')}
            />

          </MapView>
        </View>
        <TouchableHighlight onPress={()=>this.setState({isVisible:!this.state.isVisible})} style={{ position: 'absolute', bottom: 10 }}>
          <View style={[s.flexRow, s.spaceBetween]}>
              <Popup
                  isVisible={this.state.isVisible}
                  onCancelPressed={() => this.setState({ isVisible: false })}
                  onAppPressed={() => this.setState({ isVisible: false })}
                  onBackButtonPressed={() => this.setState({ isVisible: false })}
                  modalProps={{ // you can put all react-native-modal props inside.
                      animationIn: 'slideInUp'
                  }}                  
                  options={{ latitude: location.lat,
                    longitude: location.lng,
                    sourceLatitude: this.state.latitude,  // optionally specify starting location for directions
                    sourceLongitude:this.state.longitude,
                  }}
                  style={{ /* Optional: you can override default style by passing your values. */ }}
                  />

            <Image style={{ width:50, height: 50 }} source={require('../../assets/img/MapGoogle.png')} />
          </View>
        </TouchableHighlight>
      </View>
    );
          }
    return this.loading()

  }

}
MapEvent.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.object.isRequired,
}
MapEvent.defaultProps = {
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
