// import React, {Component} from 'react';
// import {Animated,Platform, StyleSheet, FlatList,View , Image , Dimensions , Button,  ImageBackground , TouchableHighlight,TextInput}  from 'react-native';
// import { Text } from 'native-base';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from '@expo/vector-icons/FontAwesome';

// var s = require('../style');


// class Tab1 extends Component {

//     render() {
//         return (
//             <ImageBackground source={require('../../../assets/img/background/wallet.png')} style={{
//                 alignItems: 'center'}}
//                 >

//                   <Button  style={{borderRadius: 25,backgroundColor:'red'}}
//                         title='Buy Vcn'
                        
//                         />
//                   <View style={styles.container}> 
//                         <Image style={[styles.box,styles.boxWidthImg]} source={require('../../../assets/img/lev.png')}/>
//                         <View style={[styles.box,styles.boxWidth]}>  
                        
//                             <Text>VCN</Text>
//                             <Text>$ 0.5</Text>
//                         </View>
//                         <View style={[styles.box,styles.boxWidth]}>  
//                             <Text>$ 779.9 (+12%)</Text>
//                             <Icon name="triangle-up" size={16} color="red"/>
//                         </View>
//                    </View>  
//                    <View  >
//                      <TextInput style={styles.Input} placeholder='Market Cap' placeholderTextColor={'white'}/> 
//                       <TextInput style={styles.Input} placeholder='Price' placeholderTextColor={'white'} />  
//                       <TextInput style={styles.Input} placeholder='Valume (24)' placeholderTextColor={'white'} />
//                       <TextInput style={styles.Input} placeholder='Change (24)' placeholderTextColor={'white'}/> 
//                        <View>
                         
//                        </View> 
//                        <Button  style={{
//                             width: 200,
//                             alignItems: 'center'
//                         }}
//                         title='Transaction History'
//                         ></Button>       
//                     </View>    
                        
//             </ ImageBackground>
//         )


//     }
// }


// const styles = StyleSheet.create({
//     AllBox :{
//     },
//     colorBtnBlue:{
//              backgroundColor: 'red'
        
//     },
//     boxWidth:{
//         width: 200
//     },
    
//     BigboxWidth:{
//         width: 600
//     },
//     boxWrapper:{
        
//       flex: 1,
//       flexDirection:'column',
//       height: 300,
//       borderColor: '#fff',
//       borderRadius: 25,
//       position: "relative",
//     },
//     box: {
//       flex: 1,
//       alignSelf: 'stretch',
      
//     },
//     Input:{
//         color:'white',
//         borderColor: 'white',
//         borderBottomWidth:1,
//         margin:2,
//         padding:5
//     },
//     buyVcn:{
//        height:30,
//        alignItems: 'center',
//        justifyContent: 'center',
//        color: '#ffffff',
//        width:120,
//        borderRadius: 25,
//     },
//     space:{
//         margin:2
//     },
//     container: {
//         marginRight:50,
//         marginLeft:50,
//         flex: 1,
//         justifyContent: 'center',
//         alignSelf: 'stretch',
//         alignItems: 'center',
//         borderWidth: 1,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//       },
//     action:{
//        position: "absolute", right:10, top:10, 
//        fontSize: 24,
//     },
//     Tabs:{
//       backgroundColor:'white',
      
//     },
//     TabsText:{
//       color:'#3cc67a'
//     },
//     vcnBox: {
//       height:60,
//       margin:15,
//       borderRadius: 5,
//     },
  
//     linearGradient: {
//       flex: 1,
//     },
//   })
  
//   export {Tab1};
