import React , {Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
class CommentItem extends Component
{
    render(){
        return <View style={{...styles.container,...this.props.style}}>
           <View style={styles.dateView}>
                <Text style={styles.date}>{this.props.date}</Text>
            </View>
            <View style={styles.content}>
              <View style={{flex: 1}}>
                <Text numberOfLines={1} style={{fontWeight:'bold', padding:5}}>{this.props.author}</Text>
              </View>
              <View style={{flex: 3,backgroundColor:'rgba(180,180,180,0.5)',borderRadius:16,padding:5}}>
                <Text style={{textAlign: 'right',padding:5, fontSize: 14}} numberOfLines={4}>{this.props.content}</Text>
              </View>
            </View>
        
        </View>
    }
}
CommentItem.propTypes = {
    author: PropTypes.string,
    content: PropTypes.string,
    style:PropTypes.object
}
const styles = StyleSheet.create({
  container:{
      flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  content:{
    flexDirection:'row',
    marginBottom: 10
  },
  dateView:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 10
  },
  date:{
    fontStyle:'italic',
    alignSelf: 'center',
    paddingRight:5
  }
})
export default CommentItem