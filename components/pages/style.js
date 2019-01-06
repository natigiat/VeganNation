'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;


module.exports = StyleSheet.create({

  blue: {
    backgroundColor: '#074876',
  },
  flexRow: {
    flex: 1,
    flexDirection: "row",
  },
  flexColumn: {
    flex: 1,
    flexDirection: "column",
  },
  spaceAround:{
    justifyContent:'space-around'
  },
  spaceBetween:{
    justifyContent:'space-between'
  },
  spaceDown:{
    marginBottom:7
  },
  margin: {
    margin: 20,
  },
  padding: {
    padding: 7
  },
  paddingBotton: {
    paddingBottom: 10
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textcoler: {
    color: '#074876',
  },
  blueText:{
    color: '#074876'
  },
  greenText: {
    color: '#31A514'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageFull: {
    width: '100%', resizeMode: 'contain'
  },
  coverBG: {
    flex: 1,
    resizeMode: 'cover',
    height: 600
  },
  btnBase: {
    borderRadius: 25,
    padding: 15
  },
  textcenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: '#3cc67a',
    color: '#3cc67a',
  },
  inputext: {
    borderBottomColor: '#ffffff',
    color: '#3cc67a',
    
  },
  InputPost:{
    borderRadius: 10, 
    padding: 5, 
    borderColor: "#31c58d", 
    color: '#31c58d'
  },
  paddingLeft: {
    paddingLeft: 10,
  },
  paddingRight: {
    paddingRight: 10,
  },

  mBottom10: {
    marginBottom:10,
  },
  bordergray: {
    backgroundColor: '#ECEFF1',
    flex: 1,
    height: 7,
    marginTop: 20
  },
  colorWhite: {
    color: '#ffffff',
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },


});