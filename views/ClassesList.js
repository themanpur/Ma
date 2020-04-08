import React, {Component} from 'react';
import { StyleSheet,View,FlatList} from 'react-native'
import PostClasses from '../components/posts/PostClasses'

class ClassesList extends Component{
data = [
    {
        id: 1,
        classe: 'PREMIERE'
    },
    {
        id: 2,
        classe: 'TERMINALE'
    }
]
    render() {
     
        return (
          <View style={styles.container}>
            <FlatList showsVerticalScrollIndicator={false} data={this.data} style={styles.listContainer} 
            keyExtractor={(item)=>item.id.toString()} 
        renderItem={({item})=><PostClasses item={item}/>} />
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
    alignItems: 'center',
    paddingTop: 250
  },
  listContainer:{
    padding:15
  }

});

export default ClassesList
