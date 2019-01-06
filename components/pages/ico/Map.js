import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { MapView , Marker } from 'react-native-maps';
export default class MapScreen extends Component {
  state = {
    places:[],
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
    latitude:null,
    longitude:null
  };

  componentDidMount() {
    // this._getLocationAsync()
    // .then(this.fetchData);
  }

  fetchData = async () => {

      const googlePlaces = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=vegan+Restaurant&sensor=true&location=32.0879994,34.7622266&radius=50000&key=AIzaSyAnwPxEXgtd38eWkC33Dqie1pFul7nM46w`;
      console.log(googlePlaces)
      fetch(googlePlaces)
        .then(response => response.text())
        .then(JSON.parse)
        .then(places => this.setState({ places: places.results }))
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
    
  
  //  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //  if (status !== 'granted') {
  //    this.setState({
  //      locationResult: 'Permission to access location was denied',
  //    });
  //  } else {
  //    this.setState({ hasLocationPermissions: true });
  //  }

  //  let location  = await Location.getCurrentPositionAsync({});
  //  let latitude  = location.coords.latitude;
  //  let longitude = location.coords.longitude;
  //  let accuracy  = location.coords.accuracy;

  //  this.setState({ locationResult: JSON.stringify(location) });
  //  this.setState({ latitude: latitude , longitude: longitude });
  //  let getDelta  = this.regionFrom(latitude , longitude , accuracy)
    

  //  // Center the map on the location we just fetched.
  //   this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: getDelta.latitudeDelta, longitudeDelta: getDelta.longitudeDelta }});
  // };

  loading(){
      return(<View><Text>Loading...</Text></View>)
  }



  render() {

    if (this.state.latitude !== null) {
      const places = this.state.places;

      return (
         

        <MapView
          style={{  flex: 1 }}
          region={this.state.mapRegion}     
        >

        {places.map(marker => (
          <MapView.Marker
            coordinate={{latitude: marker.geometry.location.lat,
                longitude: marker.geometry.location.lng,}}
            title={marker.name}
            description={marker.formatted_address}
          >
          <Image
            source={require('../../../assets/img/coinsmall.png')}
            style={{width:40 , height:40}}
          />

          </MapView.Marker>
        ))}
        

        </MapView> 
          
      );
    }

    return this.loading()

  }
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
