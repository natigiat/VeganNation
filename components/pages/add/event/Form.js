import React, { Component } from 'react';
import { Container, Picker, Header, Content, ListItem, Body, Form, Item, Icon, Input, Text, Textarea } from 'native-base';
import { Platform, StyleSheet, Dimensions, Image, View, FlatList, ScrollView, TouchableHighlight, TouchableOpacity, ImageBackground, TextInput, Button } from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };
var lng = 48.8152937
var lat = 2.4597668
var address = null
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from 'react-native-modal-datetime-picker';

import BtnLog from '../../../componentAsset/BtnLog';
import { withNavigation } from 'react-navigation';

import Moment from 'moment';
var { height, width } = Dimensions.get('window');
const GooglePlacesInput2 = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(details.formatted_address, details.name);
        address =details.formatted_address
        lat = details.geometry.viewport.northeast.lat
        lng = details.geometry.viewport.northeast.lng

      }}

      getDefaultValue={() => ''}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyCmeVFLwNFsCb8jAdGph1c5kzbKW8VS9xY',
        language: 'en', // language of the results
        // default: 'geocode'
      }}

      styles={{
        container:{
          width: width-12,
          paddingLeft:0,
          marginLeft:0,
        },
        textInputContainer: {
          width: '100%',
          padding: 0,
          margin: 0,
          backgroundColor: 'transparent',
          borderWidth: 0
        },
        description: {
          fontWeight: 'bold',
        },
        textInput: {
          padding: 15,
          margin: 0,
          height: 38,
         
          color: '#5d5d5d',
          backgroundColor: 'transparent',
          borderWidth:1,
          borderColor: "#31c58d",
          fontSize: 16,
          flex: 1
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        },
        listView: {

        }
      }}

    
      currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      //nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food'
      }}

      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      predefinedPlaces={[homePlace, workPlace]}

      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    // renderLeftButton={()  => <Image source={require('../../../../assets/img/coinsmall.png')} />}
    // renderRightButton={() => <Text>Custom text after the input</Text>}
    />
  );
}
const GooglePlacesInput = () => {
  return (
    <GoogleAutoComplete apiKey="AIzaSyCmeVFLwNFsCb8jAdGph1c5kzbKW8VS9xY"

      debounce={300}>
      {({ inputValue, handleTextChange, locationResults, fetchDetails }) => (
        <React.Fragment>
          <TextInput
            style={[s.InputPost, { borderColor: '#31c58d', borderWidth: 1, flex: 1 }]}
            value={inputValue}
            onChangeText={handleTextChange}
            placeholder="Location..."
            placeholderTextColor="#858585"
          />
          <ScrollView style={{ maxHeight: 100 }}>
            {locationResults.map((el, i) => (
              console.log(el)

            ))}
          </ScrollView>
        </React.Fragment>
      )}
    </GoogleAutoComplete>
  );
}


var s = require('../../style');


var dataNow = new Date()
var Year = dataNow.getFullYear()
var Month = dataNow.getMonth();
var Day = dataNow.getDate();
var AllData = Year + '' + Month + '' + Day
var PreseData = new Date(Year, Month, Day);
var AllDataEnd = (Year + 2) + '' + Month + '' + Day
export class AddEventScreen extends React.Component {

  constructor(props) {
    super(props)
    const { navigation } = this.props;
    const imageUrl = navigation.getParam('imageUrl', 'NO-ID');
    this.state = {
      allDay: 'date',
      checked: false,
      title: '',
      isDateTimeStartPickerVisible: false,
      isDateTimeEndPickerVisible: false,
      isTimeStartPickerVisible: false,
      isTimeEndPickerVisible: false,
      password: '',
      selected2: '',
      mixnuests: '',
      maxGuests: '',
      Details: '',
      imageUrl: imageUrl,
      Location: { "lat": 32.096610, "lng": 34.837178 },
      startDate: new Date(Year, Month, Day),
      endDate: new Date(Year, Month, Day),
      startTime: '12:00:00 AM',
      endTime: '12:00:00 AM',
      PrivateEvent: true,
      selectedHours: 0,
      //initial Hours
      selectedMinutes: 0,
      //initial Minutes
    }
    // this.confirmDate = this.confirmDate.bind(this);
    // this.openCalendar = this.openCalendar.bind(this);
    // this.confirmTime = this.confirmTime.bind(this);
    // this.openClock = this.openClock.bind(this);
  }
  //PopUp Calender open
  _showDateTimeStartPicker = () => this.setState({ isDateTimeStartPickerVisible: true });
  _showDateTimeEndPicker = () => this.setState({ isDateTimeEndPickerVisible: true });

  //PopUp Calender close
  _hideDateTimeStartPicker = () => this.setState({ isDateTimeStartPickerVisible: false });
  _hideDateTimeEndPicker = () => this.setState({ isDateTimeEndPickerVisible: false });
  //PopUp Clock close
  _showTimeStartPicker = () => this.setState({ isTimeStartPickerVisible: true });
  _showTimeEndPicker = () => this.setState({ isTimeEndPickerVisible: true });
  //PopUp Clock close
  _hideTimeStartPicker = () => this.setState({ isTimeStartPickerVisible: false });
  _hideTimeEndPicker = () => this.setState({ isTimeEndPickerVisible: false });

  _handleDatePickedStart = (date) => {
    console.log('A date has been picked: ', date);
    this.setState({
      startDate: date,
      endDate: date,
      isDateTimeEndPickerVisible:true
    })
    //this._hideDateTimePicker;
  };
  _handleDatePickedEnd = (date) => {
    console.log('A date has been picked: ', date);
    this.setState({
      endDate: date,
      
    })
    //this._hideDateTimePicker;
  };
  _handleTimePickedStart = (date) => {
    console.log('A Time has been picked: ', Moment(date).format('LTS'));
    var time = Moment(date).format('LTS')
    this.setState({
      startTime: time,
      endTime: time,
      isTimeEndPickerVisible:true
    })
    //this._hideDateTimePicker;
  };
  _handleTimePickedEnd = (date) => {
    console.log('A Time has been picked: ', date);
    var time = Moment(date).format('LTS')
    this.setState({
      endTime: time,
      
    })
    //this._hideDateTimePicker;
  };
  _handlePress() {
    // const userName = this.state.username;
    // const userpassword = this.state.password;

    // if(userName == "12" && userpassword == "12"){
    //     this.props.navigation.navigate('Home')
    // }
    let postImg = global.postImg;
      postImg = "https://d2ghhown8o5o0g.cloudfront.net/" + postImg.split("/").pop();
    fetch('http://68.183.209.228:3000/api/Events', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        location: { "lat": lat, "lng": lng },
        start: this.state.startDate,
        end: this.state.endDate,
        minGuests: this.state.maxGuests / 2,
        address: {'name':address},
        maxGuests: this.state.maxGuests,
        userId: '5c2b734a4290ea0e3b586750',
        publicEvent: this.state.PrivateEvent,
        mainImage: postImg,
        description: this.state.Details,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.props.navigation.navigate('Details', {
          itemId: responseJson.id,
          contentType: "events",
          bytsImags: this.state.imageUrl
        });


      })
      .catch((error) => {
        console.error(error);
      })
  }
  renderItem = ({ item, index }) => {
    console.log(item)
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  // confirmDate({startDate, endDate, startMoment, endMoment}) {
  //     console.log(startDate,endDate,startMoment)
  //     this.setState({
  //     startDate,
  //     endDate
  // });
  // }

  openCalendar() {
    this.calendar && this.calendar.open();
  }
  openClock() {
    this.clock && this.clock.open();
  }
  render() {

    var startDateProp = this.state.startDate.toString()
    var endDateProp = this.state.endDate.toString()


    Moment.locale('en');
    var imageMain =this.state.imageUrl
    return (
      <ScrollView style={[s.textAlignCenter, s.paddingBotton]}>
        <Form style={[s.paddingBotton]}>
          <View style={[s.flexRow, styles.raper, { margin: 12, marginBottom: 0 }]}>
            {/* <ImageBackground imageStyle={{ borderRadius: 5, borderColor: '#31c58d', borderWidth: 2 }} source={require('../../../../assets/img/background/Rectangle.png')} style={[styles.wrapper, styles.StyleAddMedia, styles.space]}>
              <Text style={styles.Mediacontent}>ADD VIDEO</Text>
              <Icon style={[styles.Mediacontent, styles.MediacontentIcon]} name='videocam' />
            </ImageBackground> */}
            <ImageBackground source={{ uri: `data:image/jpeg;base64,${imageMain}` }} style={[styles.wrapper, styles.StyleAddMedia, styles.space]} imageStyle={{ borderRadius: 5, borderColor: '#31c58d', borderWidth: 2 }}>
              {/* <Text style={styles.Mediacontent}>ADD IMAGE</Text>
              <Icon style={[styles.Mediacontent, styles.MediacontentIcon]} name='image' /> */}
            </ImageBackground>
          </View>

          <View style={[styles.posit]}>
            <View style={[s.flexRow, s.spaceAround, { alignItems: 'center', margin: 12, marginVertical: 15 }]}>
              <TextInput
                placeholder="Event Name"
                placeholderTextColor="#858585"
                onChangeText={(text) => this.setState({ title: text })}
                style={[s.InputPost, { flex: 1, color: '#31c58d', borderWidth: 1, borderColor: "#31c58d" }]}
              />

            </View>
            <View style={[s.flexRow, s.spaceAround, s.spaceDown, { marginVertical: 15 }]}>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => { this._showDateTimeStartPicker() }}
                borderColor={'#3cd29f'}
                borderWidth={1}
                colorFont={'#3cd29f'} >
                <View style={{ borderBottomWidth: 1, padding: 5 }}>
                  <Text>{Moment(startDateProp).format('L')}</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => { this._showDateTimeEndPicker() }}
                borderColor={'#3cd29f'}
                borderWidth={1}
                colorFont={'#3cd29f'} >
                <View style={{ borderBottomWidth: 1, padding: 5 }}>
                  <Text>{Moment(endDateProp).format('L')}</Text>
                </View>
              </TouchableHighlight>
              <DateTimePicker
                isVisible={this.state.isDateTimeStartPickerVisible}
                onConfirm={this._handleDatePickedStart}
                onCancel={this._hideDateTimeStartPicker}
                mode={this.state.allDay}
                minimumDate={PreseData} />
              <DateTimePicker
                isVisible={this.state.isDateTimeEndPickerVisible}
                onConfirm={this._handleDatePickedEnd}
                onCancel={this._hideDateTimeEndPicker}
                mode={this.state.allDay}
                minimumDate={PreseData}

              />
            </View>

            <View style={[s.flexRow, s.spaceAround, s.spaceDown, { marginVertical: 15, marginBottom: 30 }]}>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => { this._showTimeStartPicker() }}
                borderColor={'#3cd29f'}
                borderWidth={1}
                colorFont={'#3cd29f'} >
                <View style={{ borderBottomWidth: 1, padding: 5 }}>
                  <Text>{this.state.startTime}</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => { this._showTimeEndPicker() }}
                colorFont={'#fff'}>
                <View style={{ borderBottomWidth: 1, padding: 5 }}>
                  <Text>{this.state.endTime}</Text>
                </View>
              </TouchableHighlight>

              <DateTimePicker
                isVisible={this.state.isTimeStartPickerVisible}
                onConfirm={this._handleTimePickedStart}
                onCancel={this._hideTimeStartPicker}
                mode={'time'}

              />
              <DateTimePicker
                isVisible={this.state.isTimeEndPickerVisible}
                onConfirm={this._handleTimePickedEnd}
                onCancel={this._hideTimeEndPicker}
                mode={'time'} />
            </View>
            <LinearGradient
              colors={['#3cd29f', '#3cbd5f']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              location={[0.25, 1]}
              style={{ padding: 15, 
               width:width,
               borderColor: '#3cd29f',}}>
              <Text style={{color:'#fff',paddingLeft:10,textAlign:'left'}}>Details</Text>
            </LinearGradient>

            <View style={[styles.marginara, styles.searchSection]}>
              <GooglePlacesInput2 />
              <Textarea rowSpan={5}
                style={[s.InputPost, { padding: 5 }]}
                bordered placeholder="How I make this?"
                onChangeText={(text) => this.setState({ Details: text })}
                placeholderTextColor="#858585"
              />
              <View>
                <Picker
                  mode="dropdown"
                  style={[{ color: 'black' }]}

                  selectedValue={this.state.maxGuests}
                  onValueChange={(text) => this.setState({ maxGuests: text })}
                // onValueChange={(subject) => { this.setState({ subject: subject }) }}>
                >
                  <Picker.Item label="Max. Guests " value="" />
                  <Picker.Item label="2-4" value="4" />
                  <Picker.Item label="4-8" value="8" />
                  <Picker.Item label="8-16" value="16" />
                  <Picker.Item label="16-32" value="32" />
                </Picker>
              </View>
            </View>

            {/* <Item style={[s.input, styles.input]}>
              <Input
                placeholderTextColor='#666868'
                onChangeText={(text) => this.setState({ Details: text })}
                style={[styles.input, s.inputext]}
                placeholder="Details" />
            </Item>
            <ListItem>
              <CheckBox style={{ borderColor: '#666868' }} />
              <Body>
                <Text style={{ color: '#666868' }}>Guests can inviete friends</Text>
              </Body>
            </ListItem>
            <Item style={[s.input, styles.input]}>
              <Input
                placeholderTextColor='#666868'
                onChangeText={(text) => this.setState({ Details: text })}
                style={[styles.input, s.inputext]}
                rightIcon={
                  <Icon
                    name='add'
                    size={24}
                    color='black'
                  />}
                placeholder="Add Co- host " />
            </Item> */}

          </View>
          <View style={styles.container} style={{ marginTop: 10 }}>
            <BtnLog
              text="NEXT"
              onPress={() => { this._handlePress() }}
              colors={['#3cd29f', '#3cbd5f']}
              start={[1, 0]}
              widthtext={220}
              colorFont={'#fff'}

            />
          </View>

        </Form>


        {/*</ImageBackground>*/}
      </ScrollView>
    );
  }



}



const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 100,
    marginLeft: 15,
    marginTop: 5,
  },
  wrapper: {
    flex: 1,
    resizeMode: 'contain',
  },
  btn: {
    borderRadius: 64,
    width: 220,
    color: '#31A514',
    borderRadius: 20,
    marginTop: 20,
    borderRadius: 64,
    color: '#31A514',
    alignSelf: 'center',

  },
  input: {
    borderBottomColor: '#b0b0b0',
    color: '#858585',
    borderRadius: 10,

  },
  posit: {
    position: 'relative',
    marginTop: 0,
  },
  space: {
    margin: 2
  },
  boxDising: {
    borderRadius: 5,
    borderColor: '#31c58d',
    borderWidth: 2

  },
  tex: {
    color: 'rgba(49, 165, 20, 0.7)',
  },
  raptext: {
    padding: 10,
  },
  texrbtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnpos: {
    marginTop: 80,

  },
  btngrd: {
    width: 250,
  },
  StyleAddMedia: {
    padding: 30,
    height: 150
  },
  Mediacontent: {
    color: '#31c58d',
    fontSize: 16,
    textAlign: 'center'
  },
  MediacontentIcon: {
    fontSize: 20,
  },
  raper: {
    marginTop: 20

  },
  marginara: {
    margin: 12,
  },
  inputmax: {
    width: '50%'
  }


})


export default withNavigation(AddEventScreen);