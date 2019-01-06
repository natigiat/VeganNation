import React, { Component } from 'react';
import { Platform, StyleSheet, FlatList, View, Image, Dimensions, Button, ImageBackground, TouchableHighlight } from 'react-native';
import FAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator, createStackNavigator, TabNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, ScrollableTab } from 'native-base';
// tabs
import All from './innerTopMenu/All';
import Popular from './innerTopMenu/Popular';
import Events from './innerTopMenu/Events';
import Recipe from './innerTopMenu/Recipe';
import Search from './innerTopMenu/Search';

//var s = require('../style');
// Configs


class TopMenuInner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      scrollWithoutAnimation: true,
      currentTab: 4
    }

  }

  componentDidMount = () => {
    setTimeout(() => this.setState({ page: 1, scrollWithoutAnimation: false }), 1);

  }




  render() {
    return (


      // {[styles.text, !this.state.text ? styles.inactive : []]}
      <Container>

        <Tabs style={styles.Tabs} scrollWithoutAnimation={this.state.scrollWithoutAnimation}
          initialPage={this.state.currentPage} onChangeTab={({ i }) => this.setState({ currentTab: i })} tabBarUnderlineStyle={styles.underLine} locked={true} >

          <Tab heading={<TabHeading style={styles.Tab}><Text style={styles.TabsText}> All</Text></TabHeading>}>
            <All />
          </Tab>

          <Tab heading={<TabHeading style={styles.Tab}><Text style={styles.TabsText}> Recipe</Text></TabHeading>}>
            <Recipe />
          </Tab>

          <Tab
            heading={<TabHeading style={styles.Tab}><Text style={styles.TabsText}> Events</Text></TabHeading>}>
            <Events />
          </Tab>

          <Tab heading={<TabHeading style={styles.Tab}><Text style={styles.TabsText}> Popular</Text></TabHeading>}>
            <Popular />
          </Tab>




        </Tabs>
      </Container>



    )
  }




}


const styles = StyleSheet.create({

  Tabs: {
    backgroundColor: '#3cc67a',
    borderWidth: 0,
    flex: 1,
  },
  Tab: {
    borderWidth: 0,
    backgroundColor: 'white',
    borderColor: 'white',
  },
  TabsText: {
    color: '#3cc67a'
  },
  underLine: {
    borderWidth: 0.3,
    borderColor: '#ccc',
    backgroundColor: '#3cc67a',
  }
})


export default withNavigation(TopMenuInner);