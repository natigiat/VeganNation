import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

var s = require('../pages/style');


class NavStart extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <View>

        <View style={[styles.btngrd, { flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
          <LinearGradient
            colors={['#31A514', '#32E9E9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            location={[0.25, 0.4, 1]}
            style={{ padding: 0, alignItems: 'center', borderRadius: 0, width: '100%' }}>
            <TouchableOpacity onPress={() => onPress()} >
              <Text
                style={{
                  backgroundColor: 'transparent',
                  fontSize: 15,
                  color: '#fff',
                  textAlign: 'center',
                }}>
                {text}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

      </View >

    );
  }
}


NavStart.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};


const styles = StyleSheet.create({
  btngrd: {
    width: 250,
  },
})

export { NavStart };