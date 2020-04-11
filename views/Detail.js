import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'

class Detail extends Component {
    render() {
        
        return <View style={styles.container}>
            <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={{position:'absolute',right:'40%',top:'35%',zIndex:2000}} onPress={this.props.onPress}>
                <FontAwesomeIcon icon={faPlay} color={'red'} size={54 } />
            </TouchableOpacity>
            <View style={styles.titleView}>
                <Text style={{fontWeight: 'bold',fontSize: 16, marginRight: 5}}>CHAPITRE 1:</Text>
                <Text style={{fontWeight: 'bold',fontSize: 14}}>Introduction à la mecanique appliquée</Text>               
            </View>
            <View style={styles.video}>
                <Image source={{uri:"https://photos2.spareroom.co.uk/images/flatshare/listings/large/59/01/59010190.jpg"}} style={styles.postImage}/>     
            </View>
            <View style={styles.classView}>
                <Text numberOfLines={1} style={{fontSize: 12, color: 'rgba(0,0,0,0.5)'}}>PREMIERE</Text>
            </View>
            <View style={styles.courseView}>
                <Text>Lorem ipsum ipsum Lorem qqui ne veut rien dire du tout Lorem irespondabla ipsui nablej dans lo partin apiene</Text>               
            </View>
            </ScrollView>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10
    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: 10
    },
    classView: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10
    },
    video:{
        height:250,
        width:'100%',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 10
    },
    postImage:{
        height: '100%',
        width: '100%',
        borderWidth:1,
        borderColor: 'white',
        borderRadius: 10
    }
});
export default Detail
