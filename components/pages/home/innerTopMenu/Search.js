import React, {Component} from 'react';
import {Animated,FlatList, TouchableHighlight,Text, View,StyleSheet,ImageBackground,Image} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';




class Search extends Component {

    render() {
        return (
            <View style={styles.centerItem}>
                <Text>Not Have Search</Text>
            </View>
        )


    }
}

const styles = StyleSheet.create({
    centerItem:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center', 
    }
})

export {Search};