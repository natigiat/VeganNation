import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';

const NavigationLink = ({ navigation }) => (
  <TouchableHighlight
    onPress={() => navigation.navigate('Camera')}
    underlayColor="blue">
     <Text>Click to Navigate!</Text>
  </TouchableHighlight>
);

export default NavigationLink;