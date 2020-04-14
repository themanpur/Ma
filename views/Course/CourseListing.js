import React, {Component} from 'react';
import { StyleSheet,View,FlatList} from 'react-native'
import CourseItem from '../../components/items/CourseItem'
import {globalStyles} from '../../assets/styles/globalStyles'
import { FloatingAction } from 'react-native-floating-action'
const actions = [
  {
    text: 'Ajouter un cours',
    name: 'bt_new_course',
    position: 1,
    color: globalStyles.secondaryColor,

  }
]

class CourseListing extends Component{
data = [
    {
        id: 1,
        chapterNumber: 1,
        title: 'résistance des matériaux',
        illustration: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/59/01/59010190.jpg",
        level: 'PREMIERE',
        description:"est une discipline particulière de la mécanique des milieux continus permettant le calcul des contraintes et déformations",
        pdfLink:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        videoLink:"https://www.youtube.com/watch?v=agcFeeTvsn8"
        
    },

    {
      id: 2,
      chapterNumber: 1,
      title: "Notions d'élasticité",
      illustration: "https://photos2.spareroom.co.uk/images/flatshare/listings/large/59/01/59010190.jpg",
      level: 'TERMINALE',
      description:" l'élasticité est la propriété d'un matériau solide à retrouver sa forme d'origine après avoir été déformé",
      pdfLink:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      videoLink:"https://www.youtube.com/watch?v=agcFeeTvsn8"
      
  }
]
    render() {
     
        return <View style={{flex:1}}>
        <FlatList showsVerticalScrollIndicator={false} data={this.data} style={styles.container} 
            keyExtractor={(item)=>item.id.toString()} 
        renderItem={({item})=><CourseItem item={item} onPress={()=>this.props.navigation.navigate('CourseNavigation',{screen:'CourseDetail',params:{item}})}/>} />
        <FloatingAction color={globalStyles.secondaryColor} actions={actions} onPressItem={()=>this.props.navigation.navigate('AuthNavigation',{screen:'LogIn'})}/>
      </View>
    }
}

const styles = StyleSheet.create({
 
  container:{
    padding:8,
  }

});

export default CourseListing
