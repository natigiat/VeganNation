import React, { Component } from 'react';
import {  StyleSheet,  View, Image } from 'react-native';
import { Container, Content,  Text,Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Col,  Grid } from 'react-native-easy-grid';
import { Btnall } from '../../componentAsset/Btnall';


var s = require('../style');


// loopback-sdk
export class EventScreen extends React.Component {


  render() {
    return (
      <Container style={styles.container}>
        <Content >
          <View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50, padding: 7 }}>
              <LinearGradient
                colors={['#31A514', '#32E9E9']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                location={[0.25, 0.4, 1]}
                style={{ alignItems: 'center', borderRadius: 5, width: '100%' }}>


                <View style={styles.profileimg}>
                  <Image
                    style={{ borderColor: '#31A514', borderWidth: 2, borderRadius: 60, width: 60, height: 60 }}
                    source={require('../../../assets/img/lev.png')}

                  />
                </View>

                <Text style={styles.profile}>
                  Rena Thomas
                  </Text>

                <View style={styles.boxtext}>

                  <View style={styles.boxinfo}>
                    <Text style={styles.textara}> <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/vgniconwhet.png')} />657 </Text>
                    <Text style={[styles.textara, styles.textder,]}>EARND VCN </Text>
                  </View>

                  <View style={styles.boxinfo}>
                    <Text style={styles.textara}><Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/vgniconwhet.png')} /> 1234 </Text>
                    <Text style={[styles.textara, styles.textder]}>VCN </Text>
                  </View>

                  <View style={styles.boxinfo}>
                    <Text style={styles.textara}><Icon name="people" style={styles.icons} />78</Text>
                    <Text style={[styles.textara, styles.textder]}>FRIENDS </Text>
                  </View>


                </View>



              </LinearGradient>
            </View>
          </View>

          <View style={styles.cont}>

            <Text style={styles.title}>MY IMAGES</Text>
            <Grid>



              <Col>
                <Col style={[styles.space, styles.col1, styles.ImagHeigh]}>
                  <Image style={styles.widthImg} source={require('../../../assets/img/background/wallet.png')} />
                </Col>
                <Col style={[styles.space, styles.col1, styles.ImagHeigh]}>
                  <Image style={styles.widthImg} source={require('../../../assets/img/background/wallet.png')} />
                </Col>
                <Col style={[styles.space, styles.col1, styles.ImagHeigh]}>
                  <Image style={styles.widthImg} source={require('../../../assets/img/background/wallet.png')} />
                </Col>
              </Col>


              <Col>
                <Col style={[styles.space, styles.col1, styles.maxWidthRow]}>
                  <Image style={[styles.widthImg2, styles.widthImg]} source={require('../../../assets/img/background/wallet.png')} />
                </Col>
                <Col style={[styles.space, styles.col1, styles.maxWidthRow]}>
                  <Image style={[styles.widthImg2, styles.widthImg]} source={require('../../../assets/img/background/wallet.png')} />
                </Col>
              </Col>



            </Grid>


            <View style={styles.container} style={{ marginTop: 35 }}>
              <Btnall
                text="See All Images"
                onPress={() => { this._handlePress() }}
              />
            </View>

          </View>


          <View style={s.bordergray} ></View>




          <View style={styles.cont}>


            <Text style={styles.title}>MY POST'S</Text>
            {/* <Grid>
              <Col>
                <Col style={[styles.space, styles.col1, styles.maxWidthRow]}>
                  <Image style={[styles.widthImg2, styles.widthImg]} source={require('../../../assets/img/background/wallet.png')} />
                  <Text style={styles.textfrand}> friends </Text>
                </Col>
                <Col style={[styles.space, styles.col1, styles.maxWidthRow]}>
                  <Image style={[styles.widthImg2, styles.widthImg]} source={require('../../../assets/img/background/wallet.png')} />
                  <Text style={styles.textfrand}> friends </Text>
                </Col>
              </Col>

              <Col>
                <Col style={[styles.space, styles.col1, styles.maxWidthRow]}>
                  <Image style={[styles.widthImg2, styles.widthImg]} source={require('../../../assets/img/background/wallet.png')} />
                  <Text style={styles.textfrand}> friends </Text>
                </Col>
                <Col style={[styles.space, styles.col1, styles.maxWidthRow]}>
                  <Image style={[styles.widthImg2, styles.widthImg]} source={require('../../../assets/img/background/wallet.png')} />
                  <Text style={styles.textfrand}> friends </Text>
                </Col>
              </Col>

              <Col>
                <Col style={[styles.space, styles.col1, styles.maxWidthRow]}>
                  <Image style={[styles.widthImg2, styles.widthImg]} source={require('../../../assets/img/background/wallet.png')} />
                  <Text style={styles.textfrand}> friends </Text>
                </Col>
                <Col style={[styles.space, styles.col1, styles.maxWidthRow]}>
                  <Image style={[styles.widthImg2, styles.widthImg]} source={require('../../../assets/img/background/wallet.png')} />
                  <Text style={styles.textfrand}> friends </Text>
                </Col>
              </Col>
            </Grid> */}


            <Grid>
              <Col>
                <Col style={styles.postboxs} >
                  <Image style={[styles.widthImg2, styles.widthImg, styles.boximg]} source={require('../../../assets/img/background/wallet.png')} />
                  <Text style={styles.textfrand}> title post </Text>
                  <Text style={styles.textfrand2}> We came together as a team because we have a shared love for common sense and problem solving and believe the only way to get things done is to do them. Our geeky family has rich history in robotics, software and  machine learning, computer vision, product ... </Text>
                </Col>
                <Col style={styles.postboxs} >
                  <Image style={[styles.widthImg2, styles.widthImg, styles.boximg]} source={require('../../../assets/img/background/wallet.png')} />
                  <Text style={styles.textfrand}> title post </Text>
                  <Text style={styles.textfrand2}> We came together as a team because we have a shared love for common sense and problem solving and believe the only way to get things done is to do them. Our geeky family has rich history in robotics, software and  machine learning, computer vision, product ... </Text>
                </Col>
                <Col style={styles.postboxs} >
                  <Image style={[styles.widthImg2, styles.widthImg, styles.boximg]} source={require('../../../assets/img/background/wallet.png')} />
                  <Text style={styles.textfrand}> title post </Text>
                  <Text style={styles.textfrand2}> We came together as a team because we have a shared love for common sense and problem solving and believe the only way to get things done is to do them. Our geeky family has rich history in robotics, software and  machine learning, computer vision, product ... </Text>
                </Col>
                <Col style={styles.postboxs} >
                  <Image style={[styles.widthImg2, styles.widthImg, styles.boximg]} source={require('../../../assets/img/background/wallet.png')} />
                  <Text style={styles.textfrand}> title post </Text>
                  <Text style={styles.textfrand2}> We came together as a team because we have a shared love for common sense and problem solving and believe the only way to get things done is to do them. Our geeky family has rich history in robotics, software and  machine learning, computer vision, product ... </Text>
                </Col>
                <Col style={styles.postboxs} >
                  <Image style={[styles.widthImg2, styles.widthImg, styles.boximg]} source={require('../../../assets/img/background/wallet.png')} />
                  <Text style={styles.textfrand}> title post </Text>
                  <Text style={styles.textfrand2}> We came together as a team because we have a shared love for common sense and problem solving and believe the only way to get things done is to do them. Our geeky family has rich history in robotics, software and  machine learning, computer vision, product ... </Text>
                </Col>

              </Col>
            </Grid>


            <View style={styles.container} style={{ marginTop: 35, marginBottom: 30 }}>
              <Btnall
                text="See All Friends"
                onPress={() => { this._handlePress() }}
              />
            </View>

          </View>



        </Content>
      </Container >
    );
  }
}





const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 170,
    marginLeft: 15,
    marginTop: 5,
  },
  container: {
    flex: 1,
    color: "#FFFFFF",
  },
  title: {
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  widthImg: {
    borderRadius: 5,
    flex: 1,
    width: '100%',
  },
  widthImg2: {
    width: '100%',
    borderRadius: 5,
  },
  maxWidthRow: {
    maxHeight: 150,
  },
  ImagHeigh: {
    maxHeight: 98.5,

  },
  btn: {

    width: 120,
    color: '#31A514',
  },
  space: {
    margin: 2,
    flex: 0.5,
    borderRadius: 64,
  },
  col1: {
    height: 100,
    marginRight: 2
  },
  profile: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  profileimg: {
    position: 'absolute',
    top: -140,
    left: 0, right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',

  },
  boxtext: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  boxinfo: {
    width: '30%',
  },
  textara: {
    fontSize: 26,
    color: '#fff',
    textAlign: 'center',
  },
  icons: {
    fontSize: 24,
    color: "#ffffff",
  },
  cont: {
    marginLeft: 7,
    marginRight: 7,
    marginTop: 30,
  },
  textder: {
    fontSize: 14,

  },
  postboxs: {
    flex: 1,
    width: '100%',
    height: 320,
    marginTop: 20,
  },
  boximg: {
    maxHeight: 175,
  },
  textfrand: {
    marginTop: 7,
    color: '#31A514',
    textTransform: 'capitalize',
  },
  textfrand2: {
    marginTop: 5,
  }

})




