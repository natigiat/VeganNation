import React, {Component} from 'react';
import {Animated,FlatList, TouchableHighlight,Text, View,StyleSheet,ImageBackground,Image} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';



class ButtonOption extends Component {

    render() {
        const { icon,borderColor} = this.props;
        return (
                <View  style={[styles.centerItem,styles.space]}>
                    <LinearGradient
                        colors={['#31a514f2', '#32e9e9f2']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={ [styles.option,{borderColor:borderColor}]}>
                        <FontAwesome name={icon} size={22} style={[{ color: 'white'},styles.centerItem] } />
                    </LinearGradient>
                    
                </View>
        )
    }
}

ButtonOption.propTypes = {
    icon: PropTypes.string.isRequired,
    borderColor: PropTypes.string
  };
ButtonOption.defaultProps = {
    borderColor: 'white'
  };
const styles = StyleSheet.create({
    centerItem:{
        flex:1,
        alignItems: 'center',
        textAlign:'center',
        justifyContent: 'center', 
        marginTop:12,
        
        
    },
    space:{
        margin:2
    },
    option:{
        borderRadius:50,
        borderWidth:2,
        borderColor: 'white',
        width:50,
        height:50,  
    },
   
})

export {ButtonOption};