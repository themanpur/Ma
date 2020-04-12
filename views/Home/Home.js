import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground,TouchableOpacity,Text,Image} from 'react-native'
import homeBackground from '../../assets/imgs/home_background.png'
import {globalStyles} from '../../assets/styles/globalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faHome, faGraduationCap, faBalanceScale} from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/imgs/logo.png'
class Home extends Component {
    render() {

        return <ImageBackground source={homeBackground} style={styles.image}>
            <View style={globalStyles.overlay}>
                <View style={styles.container}>
                    <View style={{flex:1}}>
                        <FontAwesomeIcon icon={faBalanceScale} size={180} color={globalStyles.secondaryColor}/>
                    </View>
                    <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity style={styles.button}>
                            <FontAwesomeIcon icon={faHome} size={32} color="rgb(220,220,220)" />
                            <Text style={styles.text}>Classes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <FontAwesomeIcon icon={faGraduationCap} size={32} color="rgb(220,220,220)" />
                            <Text style={styles.text}>Cours</Text>
                        </TouchableOpacity>
                        <Text style={styles.text1}>“Les hommes construisent trop de murs et pas assez de ponts.” - Sir Issac Newton</Text>
                    </View>   
                </View>
            </View>
        </ImageBackground>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        padding:15,
        justifyContent:'space-between',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    button:{
        flexDirection:'row',
        backgroundColor: globalStyles.secondaryColor,
        paddingTop:15,
        paddingBottom:15,
        width:200,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:50
    },
    text:{
        color:'rgb(220,220,220)',
        fontWeight:'bold',
        fontSize: 32,
        marginLeft:10
    },
    text1:{
        color:'white',
        fontWeight:'bold'
    }
})
export default Home
