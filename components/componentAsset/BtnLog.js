import React, { Component } from 'react';
import { Text } from 'native-base';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

var s = require('../pages/style');



export default class BtnLog extends Component {
  render() {
    const { start, end, text, colors,marginTop, onPress, paddingLeft, marginLeft, Heighttext, textAlign, widthtext, padding, borderRadius, borderColor, borderWidth, colorFont } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => onPress()} >
          <View style={styles.btngrd} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <LinearGradient
              colors={colors}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              location={[0.25, 0.4, 1]}
              style={{ padding: padding, alignItems: 'center',
              
                  marginLeft: marginLeft,
              marginTop:marginTop, borderRadius: borderRadius, borderColor: borderColor, borderWidth: borderWidth }}>
              <Text
                style={{
                  width: widthtext,
                  height: Heighttext,
                  backgroundColor: 'transparent',
                  fontSize: 15,
                  color: colorFont,
                  textAlign: textAlign,
                  paddingLeft: paddingLeft,
                  
                }}>
                {text}
              </Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>

    );
  }

}


BtnLog.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  padding: PropTypes.number,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  colorFont: PropTypes.string,
  borderRadius: PropTypes.number,
  textAlign: PropTypes.string,
  paddingLeft: PropTypes.number,
  marginLeft: PropTypes.number,
  marginTop: PropTypes.number
};
BtnLog.defaultProps = {
  padding: 12,
  borderColor: 'black',
  borderWidth: 0,
  colorFont: '#fff',
  borderRadius: 65,
  paddingLeft: 0,
  textAlign: 'center',
  marginLeft: 0,
  marginTop:0,
  widthtext: 65,
  Heighttext: 20
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

  },
})


















