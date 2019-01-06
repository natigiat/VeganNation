import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Text, } from 'native-base';
import { Platform, StyleSheet, Image, View, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import BtnLog from './BtnLog';

import Calendar from 'react-native-calendar-select';
import Moment from 'moment';
var s = require('../pages/style');

var dataNow = new Date()
var Year = dataNow.getFullYear()
var Month = dataNow.getMonth();
var Day = dataNow.getDate();
var AllData = Year + '' + Month + '' + Day
var AllDataEnd = (Year + 2) + '' + Month + '' + Day
export default class CalendarPicker extends Component {

  constructor(props) {
    super(props);


    this.state = {
      startDate: new Date(Year, Month, Day),
      endDate: new Date(Year, Month, Day),
    };
    this.confirmDate = this.confirmDate.bind(this);
    this.openCalendar = this.openCalendar.bind(this);
  }
  // when confirm button is clicked, an object is conveyed to outer component
  // contains following property:
  // startDate [Date Object], endDate [Date Object]
  // startMoment [Moment Object], endMoment [Moment Object]
  confirmDate({ startDate, endDate, startMoment, endMoment }) {
    console.log(startDate, endDate)
    this.setState({
      startDate,
      endDate
    });
  }
  openCalendar() {
    this.calendar && this.calendar.open();
  }
  // in render function
  render() {
    // It's an optional property, I use this to show the structure of customI18n object.
    let customI18n = {
      'w': ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      'weekday': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'text': {
        'start': 'Check in',
        'end': 'Check out',
        'date': 'Date',
        'save': 'Confirm',
        'clear': 'Reset'
      },
      'date': 'DD / MM'  // date format
    };
    // optional property, too.
    let color = {
      subColor: '#f0f0f0'
    };
    const { minDate, maxDate, startDate, endDate } = this.props
    var startDateProp = this.state.startDate.toString()
    Moment.locale('en');

    return (
      <View>
        <BtnLog
          text={<Text>{Moment(startDateProp).format('L')}</Text>}
          onPress={() => { this.openCalendar() }}
          colors={['#3cbd5f', '#3cd29f']}
          start={[1, 0]}
          widthtext={150}
        />


        <Calendar
          i18n="en"
          ref={(calendar) => { this.calendar = calendar; }}
          customI18n={customI18n}
          color={color}
          format="YYYYMMDD"
          minDate={minDate}
          maxDate={maxDate}
          startDate={startDate}
          endDate={endDate}
          onConfirm={this.confirmDate}
        />
      </View>
    );
  }

}



CalendarPicker.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  padding: PropTypes.number,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};
CalendarPicker.defaultProps = {
  text: 'To Day',
  minDate: AllData,
  maxDate: AllDataEnd,
  startDate: '13:15',
  endDate: '14:15'
};



const styles = StyleSheet.create({
  btngrd: {
    width: 250,
  },
  cant: {
    flex: 1,
    justifyContent: 'center',
    width: '55%',
    alignSelf: 'center',

  }
})




