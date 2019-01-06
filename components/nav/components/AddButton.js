import React, { Component } from 'react';
import { Image, Animated, TouchableHighlight, View } from "react-native";
import { withNavigation } from 'react-navigation';
var s = require('../../pages/style');


const SIZE = 90;

class AddButton extends Component {

    constructor(props) {
        super();
    }

    mode = new Animated.Value(0);

    toggleView = () => {
        Animated.timing(this.mode, {
            toValue: this.mode._value === 0 ? 1 : 0,
            duration: 300
        }).start();
    };

    render() {


        const firstX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, -40]
        });
        const firstY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -30]
        });
        const secondX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 20]
        });
        const secondY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -55]
        });
        const thirdX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 80]
        });
        const thirdY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -30]
        });

        const opacity = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });

        const rotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg']
        });

        return (
            <View style={{
                position: 'absolute',
                alignItems: 'center',
                flex: 1
            }}>
                {/*<Animated.View style={{
                    position: 'absolute',
                    left: firstX,
                    top: firstY,
                }}>
                    <TouchableWithoutFeedback 
                        onPress={() =>  console.log(22)} 
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZE / 2,
                            height: SIZE / 2,
                            borderRadius: SIZE / 4,
                            backgroundColor: '#31c58d',
                        }}
                    >
                      
                     <View pointerEvents='none'> 
                         <Image source={require('../../../assets/img/menus/calendarw.png')}/>
                         <TextInput editable={false} />
                     </View>

                     
                    
                       
                    </TouchableWithoutFeedback>

  

                </Animated.View>
                <Animated.View style={{
                    position: 'absolute',
                    left: secondX,
                    top: secondY,
                }}>
                    <TouchableNativeFeedback
                        onPress={() => console.log('OK3')}
                        style={{
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZE / 2,
                            height: SIZE / 2,
                            borderRadius: SIZE / 4,
                            backgroundColor: '#31c58d',
                        }}
                    >
                        
                        <View pointerEvents='none'> 
                            <Image source={require('../../../assets/img/menus/rec.png')}/>
                            <TextInput editable={false} />
                        </View>


                    
                    </TouchableNativeFeedback>
                </Animated.View>
                <Animated.View style={{
                    position: 'absolute',
                    left: thirdX,
                    top: thirdY,
                }}>
                    <TouchableNativeFeedback
                        onPress={() => console.log('OK3')}
                        style={{
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZE / 2,
                            height: SIZE / 2,
                            borderRadius: SIZE / 4,
                            backgroundColor: '#31c58d',
                        }}
                    >
                        <View pointerEvents='none'> 
                            <Image source={require('../../../assets/img/menus/post.png')}/>
                            <TextInput editable={false} />
                        </View>


                        
                    </TouchableNativeFeedback>
                </Animated.View>*/}

                {/*onPress={this.toggleView}*/}
                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate('Camera') }}
                    underlayColor="#47a75a"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZE,
                        height: SIZE,
                        borderRadius: SIZE / 2,
                        backgroundColor: '#31c58d'
                    }}
                >
                    <Animated.View style={{
                        transform: [
                            { rotate: rotation }
                        ]
                    }}>
                        <Image
                            style={{ height: 58, width: 58 }}
                            source={require('../../../assets/img/Group(4).png')}
                        />
                    </Animated.View>
                </TouchableHighlight>
            </View>
        );
    }
}

export default withNavigation(AddButton);
