import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import Input from '../../components/Input/Input'
import {faUser,faLock} from '@fortawesome/free-solid-svg-icons'

class Connexion extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',padding:30}}>
          <Input label='Noms et Prenoms' onChangeText={(e)=>this.name=e}  icon={faUser}/>
          <Input label="Mot de passe"  type="password" onChangeText={(e)=>this.password=e}  icon={faLock}/>
          <TouchableOpacity style={styles.logIn}>
            <Text style={styles.logInText}>Connexion</Text>
          </TouchableOpacity>
          <Text style={{color:'blue',textDecorationLine:'underline',fontStyle:'italic',marginTop:20}}>Inscrivez Vous</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
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

export default Connexion
