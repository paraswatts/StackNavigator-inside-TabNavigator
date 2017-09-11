/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Tab1Page1 from './Tab1Pages/Tab1Page1'
import Tab1Page2 from './Tab1Pages/Tab1Page2'
import Tab1Page3 from './Tab1Pages/Tab1Page3'
import Tab1Page4 from './Tab1Pages/Tab1Page4'


import Tab2Page1 from './Tab2Pages/Tab2Page1'
import Tab2Page2 from './Tab2Pages/Tab2Page2'
import Tab2Page3 from './Tab2Pages/Tab2Page3'
import Tab2Page4 from './Tab2Pages/Tab2Page4'


import Tab3Page1 from './Tab3Pages/Tab3Page1'
import Tab3Page2 from './Tab3Pages/Tab3Page2'
import Tab3Page3 from './Tab3Pages/Tab3Page3'
import Tab3Page4 from './Tab3Pages/Tab3Page4'


import Tab4Page1 from './Tab4Pages/Tab4Page1'
import Tab4Page2 from './Tab4Pages/Tab4Page2'
import Tab4Page3 from './Tab4Pages/Tab4Page3'
import Tab4Page4 from './Tab4Pages/Tab4Page4'

import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';

const Tabs = TabNavigator({
    Tab1: { screen: Tab1 },
    Tab2: { screen: Tab2 },
    Tab3: { screen: Tab3 },
    Tab4: { screen: Tab4  }
  
  },
  {
  
    tabBarOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: '#353539',
      activeBackgroundColor: '#353539',
      showIcon: false,
      scrollEnabled:true,
      indicatorStyle: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2,
      },
      labelStyle:{
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
      },
      style:{
        backgroundColor: '#353539',
      },
      tabStyle: {
        width:90,
      }
    },
  }
  
  
  );


  const TabPages = StackNavigator({
    Tab:{ screen:Tabs,
        navigationOptions:()=>({
            header:null
        }),},
    Tab1Page1: { screen: Tab1Page1 },
    Tab1Page2: { screen: Tab1Page2 },
    Tab1Page3: { screen: Tab1Page3 },
    Tab1Page4: { screen: Tab1Page4 },

    Tab2Page1: { screen: Tab2Page1 },
    Tab2Page2: { screen: Tab2Page2 },
    Tab2Page3: { screen: Tab2Page3 },
    Tab2Page4: { screen: Tab2Page4 },


    Tab3Page1: { screen: Tab3Page1 },
    Tab3Page2: { screen: Tab3Page2 },
    Tab3Page3: { screen: Tab3Page3 },
    Tab3Page4: { screen: Tab3Page4 },


    Tab4Page1: { screen: Tab4Page1 },
    Tab4Page2: { screen: Tab4Page2 },
    Tab4Page3: { screen: Tab4Page3 },
    Tab4Page4: { screen: Tab4Page4 },


  
  },
);

export default TabPages;

 // export default Tabs;