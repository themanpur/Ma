import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native'
import Input from '../../components/Input/Input'
import {faUser,faLock, faGraduationCap, faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'

class Inscription extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false} contentContainerStyle={{flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%', padding:30}}>
          <Input label='Noms et Prenoms' onChangeText={(e)=>this.name=e}  icon={faUser}/>
          <Input label='Email'  onChangeText={(e)=>this.email=e} icon={faEnvelope}/>
          <Input label='Téléphone'  onChangeText={(e)=>this.phone=e} icon={faPhone}/>
          <Input label='Password' onChangeText={(e)=>this.password=e} icon={faLock}/>
          <Input label='Confirm Password' onChangeText={(e)=>this.rePassword=e} icon={faLock}/>
          <TouchableOpacity style={styles.logIn}>
            <Text style={styles.logInText}>Inscription</Text>
          </TouchableOpacity>
          <Text  style={{color:'blue',textDecorationLine:'underline',fontStyle:'italic',marginTop:20}}>Connectez Vous</Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    height: '100%',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logIn:{
    backgroundColor: 'blue',
    padding:10,
    borderRadius:6,
  },
  logInText:{
    fontSize: 18,
    color: 'white'
  }

});


export default Inscription
