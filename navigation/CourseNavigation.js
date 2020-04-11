import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import ClassList from '../../views/ClassList'
import Detail from '../views/Chamber/Detail'

export default CourseNavigation = createStackNavigator({
    
    ClassList: {
        screen: Listing,
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