import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../views/Home/Home'
import ClassNavigation from './ClassNavigation';
import AuthNavigation from './AuthNavigation';
import CourseNavigation from './CourseNavigation';

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
        <Stack.Screen
          name="ClassNavigation"
          component={ClassNavigation}
          options={{ header:()=>null }}
        />
        <Stack.Screen
          name="CourseNavigation"
          component={CourseNavigation}
          options={{ header:()=>null }}
        />
        <Stack.Screen
          name="AuthNavigation"
          component={AuthNavigation}
          options={{ header:()=>null }}
        />       
      </Stack.Navigator>
    );
  }