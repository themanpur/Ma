import React, {Component} from 'react';
import { StyleSheet,View,FlatList,ActivityIndicator} from 'react-native'
import CourseItem from '../../components/items/CourseItem'
import {globalStyles} from '../../assets/styles/globalStyles'
import { FloatingAction } from 'react-native-floating-action'
import {COURSE_LIST} from '../../consts/queries'
import {Query} from 'react-apollo'
const actions = [
  {
    text: 'Ajouter un cours',
    name: 'bt_new_course',
    position: 1,
    color: globalStyles.secondaryColor,

  }
]

class CourseListing extends Component{
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
     
        return  <Query query={COURSE_LIST} variables={{classId:this.props.route.params.classId}} onCompleted={data=>this.setState({data:data.coursesByClass})} onError={err=>{console.log(err);alert("Erreur réseau")}} >
        {
       ({loading,error,data,refetch,subscribeToMore})=>
       {
         if(refetch) this.refetch=refetch
       return loading?<View style={globalStyles.loader}>
       <ActivityIndicator size="large" color={globalStyles.secondaryColor} animating={true}/>
       </View>:<View style={{flex:1}}>
        <FlatList showsVerticalScrollIndicator={false} data={this.state.data} style={styles.container} 
            keyExtractor={(item)=>item.id.toString()} 
        renderItem={({item})=><CourseItem item={item} onPress={()=>this.props.navigation.navigate('CourseNavigation',{screen:'CourseDetail',params:{item}})}/>} />
        <FloatingAction color={globalStyles.secondaryColor} actions={actions} onPressItem={()=>this.props.navigation.navigate('AuthNavigation',{screen:'LogIn'})}/>
      </View>
      }}
      </Query>
    }
}

const styles = StyleSheet.create({
 
  container:{
    padding:8,
  }

});

export default CourseListing
