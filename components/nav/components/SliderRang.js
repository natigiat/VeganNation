import React, { Component } from 'react';
import { Text, Dimensions, Image, View, StyleSheet, Slider } from 'react-native';

const height = Dimensions.get('window').height;

export default class SliderRang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 4
    }
  }

  onValueChange(value) {
    this.setState({ question: value });
  }
  
  render() {
    return (
      <View>
        {/*<Image source={require('../../../assets/img/top.png')} />*/}
        <Slider
          minimumValue={1}
          maximumValue={5}
          minimumTrackTintColor="#1EB1FC"
          maximumTractTintColor="#ea4335"
          step={1}
          value={1}
          onValueChange={value => this.onValueChange(value)}
          style={styles.slider}
          minimumTrackImag = {"https://css-tricks.com/wp-content/uploads/2014/11/styled-input.png"}
          maximumTrackImage = {"https://css-tricks.com/wp-content/uploads/2014/11/styled-input.png"}
          thumbImage= {require('../../../assets/img/icon.png')}
          trackImage =  {require('../../../assets/img/top.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    width: "50%",
    height:30,
    position: 'absolute',
    alignItems: 'center',
    flex: 1,
    flexDirection: "row",
    textAlign:"right"
  }
});
