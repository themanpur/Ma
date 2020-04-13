import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ClassListing from '../views/Class/ClassListing'
import Header from '../components/Header/Header';

const Stack = createStackNavigator();
export default function ClassNavigation() {
    return (
      <Stack.Navigator
        initialRouteName="ClassListing"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="ClassListing"
          component={ClassListing}
          options={{ header:()=><Header/>}}
        />
       
      </Stack.Navigator>
    );
  }