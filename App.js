/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { I18nManager } from 'react-native';
import TabNavigator from './components/nav/BottomTabNavigator';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
// auth
import { LoginScreen } from './components/pages/auth/login/Login';
import { RegistrationScreen } from './components/pages/auth/registration/Registration';
import { ForgotPasswordScreen } from './components/pages/auth/forgotPassword/ForgotPassword';
import { PrivacyScreen } from './components/pages/auth/privacy/Privacy';


// Main
import { DetailsScreen } from './components/pages/details/Details';


// fOLLOW
import AddFollowTabs from './components/pages/follow/AddFollowTabs';
import FollowingScreen from './components/pages/follow/Following';
import FollowersScreen from './components/pages/follow/AddFollowTabs';



// add

import AddPostTabs from './components/pages/add/AddPostTabs';
import CameraWrapperScreen from './components/pages/add/camera/CameraWrapper';
import CameraScreen from './components/pages/add/camera/Camera';
import GalleryScreen from './components/pages/add/camera/Gallery';
import AddPostScreen from './components/pages/add/post/Form';
import { AddEventScreen } from './components/pages/add/event/Form';
import AddRecipeScreen from './components/pages/add/recipe/Form';
import { InviteFriendsToEventScreen } from './components/pages/add/event/InviteFriendsToEvent';


// ProfielMenu
import SettingsScreen from './components/pages/profile/Settings';
import ContactScreen from './components/pages/profile/Contact-us';
import BuyVcnScreen from './components/pages/profile/Buyvcn';
import NotificationsScreen from './components/pages/profile/Notifications';


// icoMenu
import MapScreen from './components/pages/ico/Map';


// recipes

import RecipeScreen from './components/pages/recipes/View';

// friends
import FriendsScreen from './components/pages/friends/Friends';

// profile
import { ProfileScreen } from './components/pages/profile/Profile';
import { UserMediaScreen } from './components/pages/profile/UserMedia';


// events
import { EventScreen } from './components/pages/events/Event';

// globl vaiables
import './components/services/Global'

// test
import TestScreen from './components/pages/test/Test';



I18nManager.allowRTL(false)
const AppNavigator = createStackNavigator({



  
  // Map: {
  //   screen: MapScreen,
  //   navigationOptions: {
  //     header: null
  //   }
  // },

  // FollowTabs: {
  //   screen: AddFollowTabs,
  //   navigationOptions: {
  //     header: null
  //   }
  // },

 // events
//  AddEvent: {
//   screen: AddEventScreen,
//   navigationOptions: {
//     header: null
//   }
// },


  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: RegistrationScreen,
    navigationOptions: {
      header: null
    }
  },

  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: {
      header: null
    }
  },
  Privacy: {
    screen: PrivacyScreen,
    navigationOptions: {
      title: 'Sign Up',
      headerStyle: {
        backgroundColor: '#31c58d',
        height: 30,
        fontSize: 10
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 14
      },
    }
  },


  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: null
    }
  },

  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      title: 'Wall',
      headerStyle: {
        backgroundColor: '#31c58d',
        height: 30,
        fontSize: 10
      },
      headerRight: <Ionicons name={'md-arrow-back'}
        onPress={() => { navigation.navigate('Settings') }} />,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 14
      },
    }
  },



  RecipiesViewScreen: {
    screen: RecipeScreen,
    navigationOptions: {
      title: 'Wall',
      titleStyle: {
        color: '#fff'
      },
      headerStyle: {
        backgroundColor: '#31c58d',
      },
    }
  },


  // friends
  Freiend: {
    screen: FriendsScreen,
    navigationOptions: {
      header: null
    }
  },


  // add

  CameraWrapper: {
    screen: CameraWrapperScreen,
    navigationOptions: {
      header: null
    }
  },


  Camera: {
    screen: CameraScreen,
    navigationOptions: {
      header: null
    }
  },

  AddContentTab: {
    screen: AddPostTabs,
    navigationOptions: {
      title: 'Camera',
      titleStyle: {
        color: '#fff'
      },
      headerStyle: {
        backgroundColor: '#31c58d',
      },
    }
  },


 

// events
AddRecipe: {
  screen: AddRecipeScreen,
  navigationOptions: {
    header: null
  }
},
  InviteFriendsToEvent: {
    screen: InviteFriendsToEventScreen,
    navigationOptions: {
      header: null
    }
  },

  Event: {
    screen: EventScreen,
    navigationOptions: {
      header: null
    }
  },

  // events
  AddRecipe: {
    screen: AddRecipeScreen,
    navigationOptions: {
      header: null
    }
  },

  Recipe: {
    screen: RecipeScreen,
    navigationOptions: {
      header: null
    }
  },


  FollowTabs: {
    screen: AddFollowTabs,
    navigationOptions: {
      header: null
    }
  },

  Following: {
    screen: FollowingScreen,
    navigationOptions: {
      header: null,
    }
  },


  Followers: {
    screen: FollowersScreen,
    navigationOptions: {
      header: null,
    }
  },


  AddPost: {
    screen: AddPostScreen,
    navigationOptions: {
      header: null
    }
  },

  // profile
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Wall',
      headerStyle: {
        backgroundColor: '#31c58d',
        height: 30,
        fontSize: 10
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 14
      },
    }
  },

  Gallery: {
    screen: GalleryScreen,
    navigationOptions: {
      header: null
    }
  },






  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      title: 'Wall',
      titleStyle: {
        color: '#fff'
      },
      headerStyle: {
        backgroundColor: '#31c58d',
      },
    }
  },


  Notifications: {
    screen: NotificationsScreen,
    navigationOptions: {
      title: 'Wall',
      titleStyle: {
        color: '#fff'
      },
      headerStyle: {
        backgroundColor: '#31c58d',
      },
    }
  },

  ContactUs: {
    screen: ContactScreen,
    navigationOptions: {
      title: 'Wall',
      titleStyle: {
        color: '#fff'
      },
      headerStyle: {
        backgroundColor: '#31c58d',
      },
    }
  },

  Buyvcn: {
    screen: BuyVcnScreen,
    navigationOptions: {
      title: 'Wall',
      titleStyle: {
        color: '#fff'
      },
      headerStyle: {
        backgroundColor: '#31c58d',
      },
    }
  },


  // icoMenu
  Map: {
    screen: MapScreen,
    navigationOptions: {
      header: null
    }
  },





});



export default AppNavigator;
