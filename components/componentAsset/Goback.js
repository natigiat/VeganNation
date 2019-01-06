import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

var s = require('../pages/style');


class Goback extends Component {
    render() {
        const { onPress } = this.props;
        return (
            <TouchableOpacity style={{ zIndex: 22 }} onPress={() => onPress()}>
                <Image
                    style={[s.imageFull, { width: 29, height: 29 }]}
                    source={require('../../assets/img/camera/back.png')}
                />
            </TouchableOpacity>
        );
    }
}

Goback.propTypes = {
    onPress: PropTypes.func
};


export { Goback };