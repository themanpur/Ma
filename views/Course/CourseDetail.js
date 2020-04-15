import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faFilePdf, faEye} from '@fortawesome/free-solid-svg-icons'
import {globalStyles} from '../../assets/styles/globalStyles'

class CourseDetail extends Component {

    render() {
        const {title,description,videoLink,pdfLink,chapterNumber,illustration,level} = this.props.route.params.item
        return <ScrollView style={{flex:1}} contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
               <Text style={styles.title}>CHAPITRE {chapterNumber} : {title.toUpperCase()}
                </Text>  
                <Text style={styles.description}>{description}</Text>   
            <View style={styles.video}>
                <Image source={{uri:illustration}} style={styles.postImage}/>     
            </View>
            <Text numberOfLines={1} style={styles.level}>{level}</Text>
            <View style={styles.fileContainer}>
                <View style={styles.file}>
                <FontAwesomeIcon icon={faFilePdf} size={22} color={globalStyles.secondaryColor}/>
                <Text style={{fontWeight:'bold',fontSize:18}}>{title}.pdf</Text>
                </View>
                <FontAwesomeIcon icon={faEye} size={28} color={globalStyles.secondaryColor}/>
            </View>
            </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        marginBottom:8
    },
    description:{
        marginBottom:8
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
    },
    level:{
        fontSize: 12,
         color: 'rgba(0,0,0,0.5)',
         marginBottom:8
    },
    fileContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:5
    },
    file:{
        flexDirection:'row',
        alignItems:'center'
    }

});
export default CourseDetail
