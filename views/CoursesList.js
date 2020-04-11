import React, {Component} from 'react';
import { StyleSheet,View,FlatList} from 'react-native'
import PostCourse from '../components/posts/PostCourse'

class CoursesList extends Component{
data = [
    {
        id: 1,
        chapter: 1,
        title: 'Titre du chapitre',
        video: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/59/01/59010190.jpg",
        classe: 'PREMIERE',
        course: 'En ce samedi matin ensoleillé, j étais en train d apprendre un principe, un point de vue complètement différent de ce que mon papa pauvre m avait enseigné. À l âge de neuf ans, je pris conscience que mes deux pères voulaient que j apprenne. Tous deux m encourageaient à étudier . .. mais pas les mêmes choses.'
    },
    {
        id: 2,
        chapter: 2,
        title: 'Titre du chapitre',
        video: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/59/01/59010190.jpg",
        classe: 'TERMINALE                                                                                        ',
        course: 'En ce samedi matin ensoleillé, j étais en train d apprendre un principe, un point de vue complètement différent de ce que mon papa pauvre m avait enseigné. À l âge de neuf ans, je pris conscience que mes deux pères voulaient que j apprenne. Tous deux m encourageaient à étudier . .. mais pas les mêmes choses.'
    }
]
    render() {
     
        return (
          <View style={styles.container}>
            <FlatList showsVerticalScrollIndicator={false} data={this.data} style={styles.listContainer} 
            keyExtractor={(item)=>item.id.toString()} 
        renderItem={({item})=><PostCourse item={item}/>} />
          </View>
          );
    }
}

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listContainer:{
    padding:15,
  }

});

export default CoursesList
