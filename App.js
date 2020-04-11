import React from 'react'
import {View} from 'react-native'
import Inscription from './views/Auth/Inscription'
import Connexion from './views/Auth/Connexion'
import ClassesList from './views/ClassesList'
import CoursesList from './views/CoursesList'
import Detail from './views/Detail'
import AddCourse from './views/AddCourse'

export default class App extends React.Component {
  render() { 
    return (
      <View>
        <AddCourse/>
      </View>
    )
  }
}