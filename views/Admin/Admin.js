import React from 'react'
import { View, StyleSheet, Text, ImageBackground } from 'react-native'
import { globalStyles } from '../../assets/styles/globalStyles'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faPhone, faEnvelope, faMapMarked, faBalanceScale, faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import homeBackground from '../../assets/imgs/home_background.png'

class Admin extends React.Component {
    render() {
      return  <ImageBackground source={homeBackground} style={{flex: 1}}>
      <View style={{...styles.container, ...globalStyles.overlay}}>
        <Text style={styles.description}>A propos de l'auteur</Text>
        
        <View style={styles.item_container}>
            <View style={styles.item}>
                <FontAwesomeIcon size={18} icon={faGraduationCap} color={globalStyles.secondary_color}/>
                <Text style={styles.label}>  Profession</Text>
            </View>
            <View style={styles.content}>
            <Text>Ingénieur géni civil</Text>
            </View>
            
        </View>
        <View style={styles.item_container}>
            <View style={styles.item}>
                <FontAwesomeIcon size={18} icon={faPhone} color={globalStyles.secondary_color}/>
                <Text style={styles.label}>  Téléphones (Whatsapp)</Text>
            </View>
            <View style={styles.content}>
            <Text>+237693063228/+237655734950</Text>
            </View>
            
        </View>
        <View style={styles.item_container}>
            <View style={styles.item}>
                <FontAwesomeIcon size={18} icon={faEnvelope} color={globalStyles.secondary_color}/>
                <Text style={styles.label}>  Email</Text>
            </View>
        <View style={styles.content}>
            <Text>julesfotsing@gmail.com</Text>
        </View>
        
    </View>
    <View style={styles.item_container}>
        <View style={styles.item}>
            <FontAwesomeIcon size={18} icon={faMapMarked} color={globalStyles.secondary_color}/>
            <Text style={styles.label}>  Localisation</Text>
        </View>
        <View style={styles.content}>
        <Text >Cameroun, Yaoundé</Text>
        </View>
        
    </View>
    </View>
</ImageBackground>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        padding: 15
    },
    item:{flexDirection:'row',
    alignItems:'center',
    borderBottomColor:'gray',flex:1,borderBottomWidth:1,width:'100%'},
    
    label:{
        fontWeight:'bold',
        fontSize:16
    },
    content:{
        flex:1,
        alignSelf: 'flex-end',
        justifyContent:'center'
    },
    description: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold'
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center'
    },
    item_container:{
            padding:5,
            marginBottom: 10,
            height:100,
            borderRadius:10,
            alignItems:'flex-start',
            justifyContent: 'space-evenly',
            backgroundColor: 'white'
    },
    action_container: {
        width: 250,
        alignSelf: 'center'
    },
    donate: {
        backgroundColor: globalStyles.secondary_color,
        padding: 18,
        borderRadius: 16,
        marginBottom: 32
    },
    donate_text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    contact_us: {
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        color: 'white',
        textAlign: 'center'
    }
})
export default Admin