import React from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import {globalStyles} from '../../assets/styles/globalStyles'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'


export default function Header(props)
{
    return <View style={styles.container}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
             <Image source={require('../../assets/imgs/logo1.png')} style={styles.logo}/>
             <Text style={{...styles.title,...props.style}}>{props.title}</Text>
            </View>
           {props.back&&<TouchableOpacity onPress={props.onPress} style={{alignSelf:"flex-start",width:'20%'}}>
               <FontAwesomeIcon icon={faChevronLeft} size={22} color={'white'}/>
            </TouchableOpacity>}
    </View>
}
Header.defaultProps ={
    title:"Meca Appliquée"
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        height:100,
        justifyContent:'center',
        backgroundColor: globalStyles.secondaryColor
    },
    logo:{
        width: 60,
        height: 60,
        marginLeft:10
    },
    title:{
        color:'white',
        fontSize:28,
        marginLeft:10,
        fontWeight: 'bold'
    }
})