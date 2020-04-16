import React, {Component} from 'react';
import { StyleSheet,FlatList,ActivityIndicator,View} from 'react-native'
import ClassItem from '../../components/items/ClassItem'
import {CLASS_LIST} from '../../consts/queries'
import {globalStyles} from '../../assets/styles/globalStyles'
import {Query} from 'react-apollo'
class ClassListing extends Component{
    refetch = () => console.log(`nothing`)
   async componentDidMount()
{
    this.listener = this.props.navigation.addListener(
      'willFocus',
      async (payload) => {
       const data = await this.refetch()
      data&&this.setState({data:data.data.classes})
      }
    )
}
state={
    data:[]
}
listener = {
  remove:()=>{}
}
componentWillUnmount() {
    this.listener.remove()
  }

    render() {
     
        return <Query query={CLASS_LIST} onCompleted={data=>this.setState({data:data.classes})} onError={err=>alert("Erreur réseau")} >
        {
       ({loading,error,data,refetch,subscribeToMore})=>
       {
         if(refetch) this.refetch=refetch
       return loading?<View style={globalStyles.loader}>
       <ActivityIndicator size="large" color={globalStyles.secondaryColor} animating={true}/>
       </View>:<FlatList showsVerticalScrollIndicator={false} data={this.state.data} style={styles.container} 
            keyExtractor={(item)=>item.id.toString()} 
        renderItem={({item})=><ClassItem item={item} onPress={()=>this.props.navigation.navigate('CourseNavigation',{screen:'CourseListing',params:{classId:item.id}})}/>} />
    }}
    </Query>
    }
}

const styles = StyleSheet.create({
  container:{
    padding:5
  }

});

export default ClassListing
