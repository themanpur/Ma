import React from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import {globalStyles} from '../../assets/styles/globalStyles'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'


export default function AuthHeader(props)
{
    return <View style={styles.container}>
            <Image source={require('../../assets/imgs/auth_background.jpg')} style={styles.image}/>
    </View>
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex:1,
        justifyContent:'center'
    },
    image:{
        height:'100%',
        width:'100%'
    }
})