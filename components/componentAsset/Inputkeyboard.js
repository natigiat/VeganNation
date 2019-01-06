import React from 'react';
import {StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import PropTypes from 'prop-types';

export default class Inputkeyboard extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
          // isLoading: true,
          postId: null,
          text: undefined,
        }
    
    
    }
    

    async componentWillMount() {
        const { data } = this.props;
        console.log("postId" + data)
    }
    

    onChangeText = (text) => this.setState({ text });

    onSubmitEditing = ({ nativeEvent: { text } }) => 
        this.setState({ text }, 
        this.submit
    );

    // Call this.props.onSubmit handler and pass the comment
    submit = () => {
        

        fetch('http://68.183.209.228:3000/api/Comments', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "userId": global.userId,
            "bodyText": text,
            "postId": this.state.postId,
        })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("comment sent to server")
        })
        .catch((error) => {
            console.error(error);
        })


    };

    render() {
        

        return (
         
            <View style={styles.container}>
                       
                <Avatar
                size="small"
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                />


                <TextInput
                    placeholder="Add a comment..."
                    keyboardType="twitter" // keyboard with no return button
                    style={styles.input}
                    value={this.state.text}
                    onChangeText={this.onChangeText} // handle input changes
                    onSubmitEditing={this.onSubmitEditing} // handle submit event
                />
                {/* Post button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.submit}
                >
                    {/* Apply inactive style if no input */}
                    <Text style={[styles.text, !this.state.text ? styles.inactive : []]}>Post</Text>
                </TouchableOpacity>
            </View>

        );
    }

}

Inputkeyboard.propTypes = {
    postId: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#EEE',
        alignItems: 'center',
        paddingLeft: 15,
        borderBottomWidth: 1,
        marginTop:10
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 15,
        marginLeft:10
    },
    button: {
        height: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inactive: {
        color: '#CCC',
    },
    text: {
        color: '#31c58d',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
});