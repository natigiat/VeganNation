import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, Slider, ImageBackground, Picker } from 'react-native';
import { Container, Content, Form, Item, Input, Text, Textarea, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import ListItem from '../../../componentAsset/ListItem';
import { withNavigation } from 'react-navigation';
var s = require('../../style');
import BtnLog from '../../../componentAsset/BtnLog';

class AddRecipeScreen extends React.Component {
    constructor(props) {
        super(props);

        const { navigation } = this.props;

        const imageUrl = navigation.getParam('imageUrl', 'NO-ID');

        this.state = {
            posts: [],
            placeName: "",
            placeItem: "",
            places: [],
            // placesTep: [],
            Category: "",
            duration: "",
            difficulty: "",
            serving: "",
            ingredients: [],
            // stepsReciipe: [],
            value: 1,
            imageUrl: imageUrl,
            recipe: {

                mainImage: "",
                title: "",
                userId: "5c2a181df08a5630a7be8ca8",
                description: [],
                difficulty: "",
                serving: "",
                duration: "",
                mediaUrl: [
                    "https://www.pexels.com/photo/nature-red-love-romantic-67636/",
                    "https://www.pexels.com/photo/nature-red-love-romantic-67636/"
                ],
                ingredients: [
                    {
                        "item": "tomatoe",
                        "amount": "2",
                        "unit": "oz"
                    },
                    {
                        "item": "celery",
                        "amount": "1",
                        "unit": "kg"
                    }
                ]
            }
        };
    }

    componentWillMount() {
        fetch("http://68.183.209.228:3000/api/posts")
            .then(response => response.text())
            .then(JSON.parse)
            .then(posts => this.setState({ posts }));
    }


    addRecipe() {
        let postImg = global.postImg;
        postImg = "https://d2ghhown8o5o0g.cloudfront.net/" + postImg.split("/").pop();

        this.state.recipe.ingredients = this.state.ingredients
        this.state.recipe.description = this.state.stepsReciipe
        this.state.recipe.mainImage = postImg

        fetch('http://68.183.209.228:3000/api/Recipes', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.recipe)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.props.navigation.navigate('Details', {
                    itemId: responseJson.id,
                    contentType: "recipes",
                });

            })
            .catch((error) => {
                console.error(error);
            })
    }

    onValueChange(value) {
        this.state.recipe.difficulty = value
    }



    renderItem = ({ item, index }) => {
        let mainImg = this.state.imageUrl;

        return (

            <Image source={{ uri: `data:image/jpeg;base64,${mainImg}` }} style={[styles.userImg, styles.userImgContact]} />

        );
    }
    // placeStapsChangedHandler = val => {
    //     this.setState({
    //         placeStaps: val
    //     });
    // };
    // placeStepsSubmitHandler = () => {
    //     if (this.state.placeStaps.trim() === "") {
    //         return;
    //     }
    //     this.setState({
    //         stepsReciipe: this.state.stepsReciipe.concat({
    //             'Steps': this.state.placeStaps,

    //         }),
    //         placesTep: this.state.placesTep.concat(this.state.placeStaps)

    //     })
    // }

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeItemChangedHandler = val => {
        this.setState({
            placeItem: val
        });
    };

    placeSubmitHandler = () => {
        // const xBlou = <Text>X</Text>
        let placeTogd = (this.state.placeName + '  X  ' + this.state.placeItem)
        if (placeTogd.trim() === "") {
            return;
        }

        this.setState({
            ingredients: this.state.ingredients.concat({
                'item': this.state.placeName,
                'amount': this.state.placeItem,
                'unit': this.state.Category,

            }),
            places: this.state.places.concat(placeTogd)

        });
    };

    render() {
        const placesOutput = this.state.places.map((place, i) => (
            <ListItem key={i} placeName={place} />

        ));
        // const StapsOutput = this.state.stepsReciipe.map((place, i) => (
        //     <Text >{place.Steps}</Text>

        // ));
        var { height, width } = Dimensions.get('window');
        // let borderClick = styles.borderClick;
        return (
            <Container style={styles.containerimg}>



                <Content>
                    <View style={[s.flexRow, styles.raper, { margin: 12, marginBottom: 0 }]}>

                        <View style={[styles.wrapper, styles.StyleAddMedia, styles.space, { borderRadius: 5, borderColor: '#31c58d', borderWidth: 2 }]} >
                            <Text style={[styles.Mediacontent, s.textAlignCenter, { marginTop: 15 }]}>ADD IMAGE</Text>
                            <Icon style={[styles.Mediacontent, styles.MediacontentIcon, s.textAlignCenter]} name='image' />
                        </View>

                        <ImageBackground imageStyle={{ borderRadius: 5, borderColor: '#31c58d', borderWidth: 2 }} source={require('../../../../assets/img/background/Rectangle.png')} style={[styles.wrapper, styles.StyleAddMedia, styles.space]}>
                            <Text style={[styles.Mediacontent, s.textAlignCenter, { marginTop: 15 }]}>ADD VIDEO</Text>
                            <Icon style={[styles.Mediacontent, styles.MediacontentIcon, s.textAlignCenter]} name='videocam' />
                        </ImageBackground>

                    </View>


                    <Form>


                        <View style={[{ flex: 1, textAlign: 'center', marginRight: 12 }]}>
                            <Item>
                                <Input
                                    placeholder="Recipes Name"
                                    placeholderTextColor="#000000"
                                    onChangeText={(text) => this.state.recipe.title = text}
                                    placeholderTextColor="#858585"
                                    style={{ color: '#31c58d', height: 36, borderRadius: 10, padding: 2, marginRight: 10, marginTop: 25, marginBottom: 10, borderColor: "#31c58d" }}
                                />
                            </Item>

                            <View style={[s.flexRow, s.spaceAround, { marginTop: 15 }]}>
                                <Item style={[styles.duration, { flexBasis: 80, flex: 1 }]}>
                                    <Input
                                        style={[styles.inputara, styles.inputFild]}
                                        placeholder="How much time its take?"
                                        onChangeText={(text) => this.state.recipe.duration = text}
                                        placeholderTextColor="#858585"
                                        keyboardType="numeric"
                                    />
                                </Item>


                                <View style={[{ flexBasis: 10, flex: 1, borderBottomWidth: 1, borderColor: "#ccc", color: '#858585', marginLeft: 15 }]}>


                                    <Picker
                                        mode="dropdown"
                                        style={{ color: '#858585' }}
                                        selectedValue={this.state.maxGuests}
                                        onValueChange={(text) => this.setState({ maxGuests: text })}
                                    >
                                        <Picker.Item label="Serving Size" value="" />
                                        <Picker.Item label="2-4" value="4" />
                                        <Picker.Item label="4-8" value="8" />
                                        <Picker.Item label="8-16" value="16" />
                                        <Picker.Item label="16-32" value="32" />
                                    </Picker>
                                </View>
                            </View>


                            <View style={[{ marginTop: 15 }]}>

                                <View style={[s.row, { margin: 5, marginLeft: 21.5 }]} >
                                    <Text style={{ color: '#858585', marginBottom: 15 }}>How Easy is to make this?</Text>
                                    <Text style={{ color: '#31c58d', marginLeft: 7 }} > {this.state.value}</Text>
                                </View>

                                <View style={{ marginRight: -13.6 }}>
                                    <Slider
                                        maximumValue={5}
                                        minimumValue={1}
                                        minimumTrackTintColor="#31c58d"
                                        maximumTractTintColor="#ccc"
                                        step={1}
                                        value={1}
                                        onValueChange={(value) => this.setState({ value })}
                                        style={styles.slider}
                                        thumbTintColor='#21b57d'

                                    />




                                </View>


                            </View>


                        </View>


                        <LinearGradient
                            colors={['#31c58d', '#66cda6']}
                            start={{ x: 1, y: 0 }}
                            location={[0.25, 0.4, 1]}
                            style={{ padding: 6, alignItems: 'center', borderRadius: 0 }}>
                            <Text
                                style={{
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    fontSize: 18,
                                    color: '#fff',

                                }}>
                                Ingredients
                                </Text>
                        </LinearGradient>




                        <View style={[styles.inputrow]}>

                            <Item style={styles.cont2} >
                                <Input
                                    style={[styles.inputara, styles.inputFild]}
                                    placeholder="Add Item"
                                    value={this.state.placeName}
                                    onChangeText={this.placeNameChangedHandler}
                                    placeholderTextColor="#858585"
                                />
                            </Item>
                            <View style={[styles.cont3, styles.pic]}>
                                <Item Picker style={[styles.itampic, { zIndex: 5 }]} >
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name='keypad' style={{ color: '#31c58d', position: 'relative' }} />}
                                        androidIcon={<Icon name='keypad' style={{ color: '#31c58d', position: 'relative' }} />}
                                        style={[styles.pick, { fontSize: 10 }]}
                                        placeholder="Select your SIM"
                                        placeholderTextColor='#03a9f4'
                                        selectedValue={this.state.Category}
                                        onValueChange={(text) => this.setState({ Category: text })}>
                                        <Picker.Item label="Category" value="Category" />
                                        <Picker.Item label="Amount" value="Amount" />
                                        <Picker.Item label="Kilo" value="Kilo" />
                                        <Picker.Item label="Lbs" value="Lbs" />
                                        <Picker.Item label="Grams" value="Grams" />
                                        <Picker.Item label="Oz" value="Oz" />
                                        <Picker.Item label="Spoon" value="Spoon" />
                                        <Picker.Item label="Tea Spoon" value="Tea Spoon" />
                                        <Picker.Item label="Cups" value="Cups" />
                                    </Picker>

                                </Item>
                            </View>


                            <Item style={styles.cont2}>
                                <Input
                                    style={[styles.inputara, styles.inputFild]}
                                    placeholder="Amount"
                                    value={this.state.placeItem}
                                    onChangeText={this.placeItemChangedHandler}
                                    placeholderTextColor="#858585"
                                    keyboardType="numeric"
                                />
                            </Item>
                            <View style={styles.cont3} >
                                <BtnLog
                                    text="+"
                                    onPress={() => { this.placeSubmitHandler() }}
                                    colors={['#31c58d', '#66cda6']}
                                    start={{ x: 1, y: 0 }}
                                    widthtext={20}
                                    padding={6}
                                />
                            </View>
                        </View>

                        <View style={[styles.container]}>
                            <View style={styles.listContainer}>{placesOutput}</View>
                        </View>

                        <LinearGradient
                            colors={['#31c58d', '#66cda6']}
                            start={{ x: 1, y: 0 }}
                            location={[0.25, 0.4, 1]}
                            style={{ padding: 6, alignItems: 'center', borderRadius: 0 }}>
                            <Text
                                style={{
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    fontSize: 18,
                                    color: '#fff',

                                }}>
                                Methods
                            </Text>
                        </LinearGradient>


                        <View style={[styles.inputrow]}>
                            <View style={[styles.marginara, styles.cont4]}>
                                <Textarea rowSpan={5}
                                    style={{ borderRadius: 10, padding: 10, borderColor: "#31c58d", color: '#31c58d' }}
                                    bordered placeholder="How I make this?"
                                    onChangeText={(text) => this.state.recipe.description = text}
                                    // onChangeText={this.placeStapsChangedHandler()}
                                    placeholderTextColor="#858585"
                                />
                            </View>

                            {/* <View style={styles.cont5} >
                                <BtnLog
                                    text="+"
                                    onPress={() => { this.placeStepsSubmitHandler() }}
                                    colors={['#31c58d', '#66cda6']}
                                    start={[1, 0]}
                                    widthtext={20}
                                    padding={6}
                                />
                            </View> */}
                        </View>
                        {/* {StapsOutput} */}



                        <View style={[styles.container, style = { marginBottom: 12, marginTop: 35 }]} >

                            <BtnLog
                                text="SHARE"
                                onPress={() => { this.addRecipe() }}
                                colors={['#31c58d', '#66cda6']}
                                start={[1, 0]}
                                widthtext={140}
                            />
                        </View>



                    </Form>


                </Content>

            </Container >
        );
    }
}




const styles = StyleSheet.create({

    title: {
        backgroundColor: '#209ab6',
        color: "#31c58d",
        alignSelf: 'stretch',
        textAlign: 'center',
        padding: 10,
    },
    btn: {
        borderRadius: 45,
        width: 150,
        color: '#31A514',
    },
    inputrow: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        flex: 1,
        alignItems: 'center',
    },
    raper: {
        marginTop: 20

    },
    wrapper: {
        flex: 1,
        resizeMode: 'cover',
        height: '100%'

    },
    containerimg: {
        height: '100%'
    },
    textunput: {
        color: '#000000'
    },
    con: {
        width: '28%',
        // verticalAlign: 'top',

    },
    StyleAddMedia: {
        padding: 30,
        height: 150
    },
    wrapper: {
        flex: 1,
        resizeMode: 'contain',
    },
    space: {
        margin: 2
    },
    imgrecipes: {
        flex: 1,
        height: '50%',
        width: '65%',
    },
    userImg: {
        marginLeft: 5,
        marginRight: 5,
        borderColor: '#31c58d',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#31c58d',
        width: 100,
        height: 85,
    },
    userImgContact: {
        marginTop: 20,
        width: 100,
        height: 85,
    },
    inputContainer: {
        // flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center"
    },
    placeInput: {
        width: "30%"
    },
    placeButton: {
        width: "30%"
    },
    listContainer: {
        width: "98%",
        marginTop: 5,
    },
    inputFild: {
        color: '#31c58d',
        padding: 3,
        borderBottomColor: '#31c58d'
    },
    cont1: {
        flex: 0.6
    },
    cont2: {
        flex: 2
    },
    cont3: {
        flex: 1
    },
    cont4: {
        flex: 5
    },
    cont5: {
        flex: 1
    },
    pic: {
        color: '#31c58d',
        borderColor: '#31c58d',
        borderRadius: 64,
        borderWidth: 2,
        padding: 0,
        margin: 0,
        // marginRight: 7,
        textAlign: 'center',
    },
    pick: {
        color: '#31c58d',
        padding: 0,
        height: 30,
        zIndex: 5,
        width: '100%',
        margin: 0,
    },
    itampic: {
        borderColor: 'transparent',
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        margin: 0,
        padding: 0,
    },
    margin: {
        marginBottom: 7,
        width: '95%',
        textAlign: 'center',
    },
    marginara: {
        margin: 12
    },
    borderClick: {
        borderTopColor: '#31c58d',
        borderWidth: 1,
    },
    marginBottom: {
        marginBottom: 15
    },
    slider: {
        // width: "100%",
        flex: 1,
        height: 30,
        position: 'relative',
        alignItems: 'center',
        flex: 1,
        flexDirection: "row",
        textAlign: "right",
        marginBottom: 3,
        marginLeft: 6.5

    }

})


export default withNavigation(AddRecipeScreen);
