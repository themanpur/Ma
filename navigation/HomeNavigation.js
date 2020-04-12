import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../views/Home/Home'

const Stack = createStackNavigator();
export default function HomeNavigation() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ header:()=>null }}
        />
       
      </Stack.Navigator>
    );
  }