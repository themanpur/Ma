import React from 'react'
import {View} from 'react-native'
import Inscription from './views/Auth/Inscription'
import Connexion from './views/Auth/Connexion'
import ClassesList from './views/ClassesList'
import CoursesList from './views/CoursesList'

export default class App extends React.Component {
  render() { 
    return (
      <View>
        <CoursesList/>
      </View>
    )
  }
}