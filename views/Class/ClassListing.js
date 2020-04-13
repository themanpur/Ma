import React, {Component} from 'react';
import { StyleSheet,View,FlatList} from 'react-native'
import ClassItem from '../../components/items/ClassItem'
import issac from '../../assets/imgs/issac.jpg'
import albert from '../../assets/imgs/albert.jpg'
class ClassListing extends Component{
data = [
    {
        id: 1,
        illustration:albert,
        label: 'Premiere',
        description:"Deuxième année du lycée, lorsque l'élève a choisi le baccalauréat scientifique"
    },
    {
        id: 2,
        illustration:issac,
        label: 'Terminal',
        description:"Troisième et dernière année du lycée, lorsque l'élève a choisi le baccalauréat scientifique."
    }
]
    render() {
     
        return <FlatList showsVerticalScrollIndicator={false} data={this.data} style={styles.container} 
            keyExtractor={(item)=>item.id.toString()} 
        renderItem={({item})=><ClassItem item={item}/>} />
    }
}

const styles = StyleSheet.create({
  container:{
    padding:8
  }

});

export default ClassListing
