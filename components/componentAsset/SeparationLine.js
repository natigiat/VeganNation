import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

var s = require('../pages/style');


class SeparationLine extends Component {
    render() {
        const { color, height } = this.props;
        return (
            <View style={{ backgroundColor: color, height: height }}>
            </View>

        );
    }
}


SeparationLine.propTypes = {
    color: PropTypes.string,
    height: PropTypes.number,
};

SeparationLine.defaultProps = {
    color: '#ECEFF1',
    height: 10
};


export { SeparationLine };