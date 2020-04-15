import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CourseListing from '../views/Course/CourseListing'
import CourseDetail from '../views/Course/CourseDetail'
import CourseAdd from '../views/Course/CourseAdd'
import Header from '../components/Header/Header';

const Stack = createStackNavigator();
export default function CourseNavigation() {
    return (
      <Stack.Navigator
        initialRouteName="CourseListing"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="CourseListing"
          component={CourseListing}
          options={{ header:()=><Header/>}}
        />
        <Stack.Screen
          name="CourseDetail"
          component={CourseDetail}
          options={{ header:()=><Header/>}}
        />
        <Stack.Screen
          name="CourseAdd"
          component={CourseAdd}
          options={{ header:()=><Header/>}}
        />
       
      </Stack.Navigator>
    );
  }