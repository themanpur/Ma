import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity,View } from 'react-native'
import Input from '../../components/Input/Input'
import { faLock, faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons'
import AuthHeader from '../../components/Header/AuthHeader'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {globalStyles} from '../../assets/styles/globalStyles'
class LogIn extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AuthHeader/>
        <ScrollView contentContainerStyle={styles.form} style={{flex:1}}>
          <Input label='Téléphone' onChangeText={(e) => this.name = e} icon={faPhone} />
          <Input label="Mot de passe" type="password" onChangeText={(e) => this.password = e} icon={faLock} />
          <View style={styles.submit}>
            <Text style={styles.submitTxt}>Connexion</Text>
            <TouchableOpacity style={styles.submitBtn}>
              <FontAwesomeIcon icon={faArrowRight} color="white"/>
            </TouchableOpacity>
          </View>
            <Text style={styles.signUp} onPress={()=>this.props.navigation.navigate('AuthNavigation',{screen:'SignUp'})}>Inscrivez Vous</Text>
         </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  form:{
    padding:10,
    flexDirection:'column',
    justifyContent:'flex-end'
  },
  logIn: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 6,
  },
  logInText: {
    fontSize: 18,
    color: 'white'
  },
  submit:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:20,
    paddingRight:20,
    marginBottom:20
  },
  submitBtn:{
    backgroundColor: globalStyles.secondaryColor,
    width:60,
    height:60,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
  },
  submitTxt:{
    fontWeight:'bold',
    fontSize:20
  },
  signUp:{
    color:globalStyles.secondaryColor,
    textDecorationLine:'underline',
    fontWeight:'bold'
  }

});

export default LogIn
