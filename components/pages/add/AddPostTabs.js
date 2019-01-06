import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList,View , Image , Dimensions , Button,  ImageBackground , TouchableHighlight}  from 'react-native';
import FAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator  , createStackNavigator  , TabNavigator} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Tab, Tabs, TabHeading, Icon , Text , ScrollableTab} from 'native-base';
// tabs
import AddPostScreen from './post/Form.js';
import AddEventScreen from './event/Form.js';
import AddRecipeScreen  from './recipe/Form.js';


//var s = require('../style');
// Configs

class AddPostTabs  extends Component {
   
   constructor(props) {
      super(props);
      this.state = { 
        pageNumber: 1 ,
        scrollWithoutAnimation: true,
        currentTab: 4
      }

   }

  componentDidMount = () => {
    setTimeout(() => this.setState({ page: 1, scrollWithoutAnimation: false }), 1);
  }

   
   render() {
    return (
            <Container>  
               <Tabs style={styles.Tabs} scrollWithoutAnimation={this.state.scrollWithoutAnimation} 
               initialPage={this.state.currentPage} onChangeTab={({ i }) => this.setState({ currentTab: i })}  locked={true} >
                <Tab heading={ <TabHeading style={styles.Tab}><Text style={styles.TabsText}> Post</Text></TabHeading>}>
                     <AddPostScreen />
                </Tab>

                <Tab heading={ <TabHeading style={styles.Tab}><Text style={styles.TabsText}> Recipe</Text></TabHeading>}>
                    <AddRecipeScreen />
                </Tab>
                <Tab
                 heading={ <TabHeading style={styles.Tab}><Text style={styles.TabsText}> Event</Text></TabHeading>}>
                    <AddEventScreen />
                </Tab>
              </Tabs>
            </Container>
 
 
 
     )
   }
 



}


const styles = StyleSheet.create({

  Tabs:{
    backgroundColor:'white',
    borderWidth: 0,
    flex: 1,
  },
  Tab:{
    borderWidth: 0,
    backgroundColor:'white',
    borderColor: 'white',
  },
  TabsText:{
    color:'#3cc67a'
  },
})


export default  withNavigation(AddPostTabs);