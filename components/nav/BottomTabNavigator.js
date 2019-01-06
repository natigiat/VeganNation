import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { HomeScreen } from '../pages/home/Main';
import { DetailsScreen } from '../pages/details/Details';
import FriendsScreen from '../pages/friends/Friends';
// import { MarketScreen } from '../pages/wallet/Market';
import { LoginScreen } from '../pages/auth/login/Login';
import { CameraScreen } from '../pages/add/camera/Camera';
import AddButton from './components/AddButton';
import TopMenu from './TopMenu';
var s = require('../pages/style');
// Configs






class SearchScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>search!</Text>
      </View>
    );
  }
}

let iconBottom;

export const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: props => <TopMenu />,
    }
  }
})


export const FriendsStack = createStackNavigator({
  Home: {
    screen: FriendsScreen,
    navigationOptions: {
      header: null,
      tabBarVisible: false
    }
  }
})

export const AddingStack = createStackNavigator({
  screen: () => null,
  navigationOptions: () => ({
    tabBarIcon: <AddButton /> // Plus button component
  })
})


// export const WalletStack = createStackNavigator ({
//     Wallet:{
//       screen: MarketScreen,
//       navigationOptions:{
//         header: props => <TopMenu /> ,      
//       }
//     }
// })




export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
    },

    Add: {
      screen: () => null,
      navigationOptions: { tabBarVisible: false }
    },

    Freiend: {
      screen: FriendsStack,

    },



    // Recipe: {
    //   screen: CameraScreen,
    //   navigationOptions:{tabBarVisible: false} 
    // },
    // Adding:AddingStack,
    // search: SearchScreen,
    // WalletScreen: WalletStack,
  },

  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          horizontal = 25;
          iconName = `md-grid`;
          iconBottom = <Image
            style={[s.imageFull, { width: 29, height: 32 }]}
            source={require('../../assets/img/menus/iconHome.png')}
          />
        } else if (routeName === 'Freiend') {
          horizontal = 25;
          iconName = `md-person-add`;
          iconBottom = <Image
            style={[s.imageFull, styles.logomenu]}
            source={require('../../assets/img/menus/friends.png')}
          />
        } else if (routeName === 'Recipe') {
          isclass = false;
          horizontal = 25;
          iconName = `md-beer`;
          iconBottom = <Ionicons name={iconName} size={horizontal} color={tintColor} />;
        } else if (routeName === 'search') {
          horizontal = 25;
          iconName = `md-search`;
        } else if (routeName === 'WalletScreen') {
          horizontal = 25;
          iconName = `md-wallet`;
        } else if (routeName === 'Add') {
          horizontal = 50;
          iconName = `md-camera`;
          iconBottom = <AddButton />;
        }
        return iconBottom;
      },
    }),
    tabBarOptions: {
      inactiveTintColor: 'rgb(255,255,255)',
      style: {
        backgroundColor: 'rgba(60, 174, 128, 1)',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
      },
      showLabel: false, // turn off tab labels
    },
  }
);



const styles = StyleSheet.create({
  vigo: {
    padding: 20,
    width: 120,
    height: 120,
    marginBottom: 70,
    borderRadius: 70,
    backgroundColor: '#31c58d',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  logomenu: {
    width: 45,
    height: 45,
  }
})
