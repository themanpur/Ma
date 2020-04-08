import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
class PostCourse extends Component {
    render() {
        const { chapter, title, video, classe } = this.props.item
        return <TouchableOpacity style={styles.container}>
            <View style={styles.video}>
                <Image source={{uri:video}} style={styles.postImage}/>     
            </View>
            <View style={styles.titleView}>
                <Text style={{fontWeight: 'bold',fontSize: 16, marginRight: 5}}>CHAPITRE {chapter}:</Text>
                <Text style={{fontWeight: 'bold',fontSize: 14}}>{title}</Text>               
            </View>
            <View style={styles.classView}>
                <Text numberOfLines={1} style={{fontSize: 12, color: 'blue'}}>{classe}</Text>
            </View>
        </TouchableOpacity>
    }
}
PostCourse.propTypes = {
    item: PropTypes.object,
  }
const styles = StyleSheet.create({
    container: {
        height: 180,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        marginBottom: 10
    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%'
    },
    classView: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%'
    },
    video:{
        height:'75%',
        width:'100%',
        alignItems: 'center',
        justifyContent:'center'
    },
    postImage:{
        height: '100%',
        width: '100%',
        borderWidth:1,
        borderColor: 'white',
        borderRadius: 10
    }
});
export default PostCourse
