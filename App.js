import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './src/Home';
import Collections  from './src/Collections';
import Saved from './src/Saved';
import Search from './src/Search';
import LandingScreen from './src/LandingScreen';
import Signup from './src/Signup';
import Signin from './src/Signin';
import Apartments from './src/Apartments';
import Houses from './src/Houses';





const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackScreen=() =>{
  return(
    <Tab.Navigator initialRouteName='Home' >
           <Tab.Screen name="Home" component={Home} />
           <Tab.Screen name="Collection" component={Collections} />
           <Tab.Screen name="Saved" component={Saved} />
           <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LandingScreen' >
        <Stack.Screen name="LandingScreen" component={LandingScreen}/>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Home" component={StackScreen} />
        <Stack.Screen name="Collections" component={Collections} />
        <Stack.Screen name="Saved" component={Saved} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Apartments" component={Apartments} />
        <Stack.Screen name="Houses" component={Houses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;