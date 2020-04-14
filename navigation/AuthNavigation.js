import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LogIn from '../views/Auth/LogIn'
import SignUp from '../views/Auth/SignUp'

const Stack = createStackNavigator();
export default function AuthNavigation() {
    return (
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ header:()=>null}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ header:()=>null}}
        />
       
      </Stack.Navigator>
    );
  }