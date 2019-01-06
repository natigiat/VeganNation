import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'native-base';

const listItem = (props) => (
    <View style={styles.listItem}>

        <Text style={styles.textList}>{props.placeName}</Text>
        <Text style={styles.textList}>{props.placeItem}</Text>

    </View>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,

    },
    textList: {
        color: '#31c58d'
    }
});

export default listItem;