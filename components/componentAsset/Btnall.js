import React, { Component } from 'react';
import { Text, Button } from 'native-base';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

var s = require('../pages/style');


class Btnall extends Component {
    render() {
        const { text, onPress } = this.props;
        return (
            <Button bordered success onPress={() => onPress()} style={[styles.cant, s.btnBase]}>
                <Text>{text}</Text>
            </Button>
        );
    }
}

Btnall.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    cant: {
        flex: 1,
        justifyContent: 'center',
        width: '55%',
        alignSelf: 'center',

    },
})



export { Btnall };