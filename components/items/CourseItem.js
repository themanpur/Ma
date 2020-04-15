import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'

class CourseItem extends Component {
    render() {
        const {chapterNumber,illustration,level,title} = this.props.item
        return <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={this.props.onPress}>
            <View style={styles.video}>
                <Image source={{uri:illustration}} style={styles.postImage}/>     
            </View>
            <View style={styles.classView}>
                <Text numberOfLines={1} style={{fontSize: 12, color: 'rgba(0,0,0,0.5)'}}>{level}</Text>
            </View>
            <View style={styles.titleView}>
                <Text style={{fontWeight: 'bold',fontSize: 16, marginRight: 5}}>CHAPITRE {chapterNumber}:</Text>
                <Text style={{fontWeight: 'bold',fontSize: 14}}>{title}</Text>               
            </View>
        
        </TouchableOpacity>
    }
}
CourseItem.propTypes = {
    item: PropTypes.object,
  }
const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        marginBottom: 20
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
        height:'80%',
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
export default CourseItem
