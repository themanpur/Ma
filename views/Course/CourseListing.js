import React, {Component} from 'react';
import { StyleSheet,View,FlatList} from 'react-native'
import CourseItem from '../../components/items/CourseItem'

class CourseListing extends Component{
data = [
    {
        id: 1,
        chapterNumber: 1,
        title: 'Titre du chapitre',
        illustration: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/59/01/59010190.jpg",
        level: 'PREMIERE',
        
    },

    {
      id: 2,
      chapterNumber: 1,
      title: 'Titre du chapitre',
      illustration: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/59/01/59010190.jpg",
      level: 'TERMINALE',
      
  }
]
    render() {
     
        return <FlatList showsVerticalScrollIndicator={false} data={this.data} style={styles.container} 
            keyExtractor={(item)=>item.id.toString()} 
        renderItem={({item})=><CourseItem item={item}/>} />
    }
}

const styles = StyleSheet.create({
 
  container:{
    padding:8,
  }

});

export default CourseListing
