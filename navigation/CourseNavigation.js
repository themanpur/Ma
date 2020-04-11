import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import ClassList from '../views/ClassList'
import Detail from '../views/Detail'

export default CourseNavigation = createStackNavigator({
    
    ClassList: {
        screen: ClassList,
        navigationOptions: {
            header: null
        }
    },
    Detail:{
        screen: Detail,
        navigationOptions:{
            header: null
        }
    }
})