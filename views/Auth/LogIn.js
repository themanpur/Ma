import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity,View,ActivityIndicator} from 'react-native'
import Input from '../../components/Input/Input'
import { faLock, faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons'
import AuthHeader from '../../components/Header/AuthHeader'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {globalStyles} from '../../assets/styles/globalStyles'
import { Mutation } from 'react-apollo'
import {setItem} from '../../helpers/localStorage'
import {LOGIN} from '../../consts/mutations'

class LogIn extends React.Component {
  state={
    loading:false,
    error:false,
    messageError:""
  }
  form={
    phone:"",
    password:""
  }
  _error=(errorMessage)=>{
    console.log(`Login error ${errorMessage}`)
    let message = errorMessage.toString() 
    this.setState({error:true,loading:false,messageError:message.substr(22)})
  }
  _complete=(data)=>{
    setItem("token",data.logIn.token)
    this.setState({error:false,loading:false,messageError:""})
    this.props.navigation.navigate(this.props.route.params.navigator,{screen:this.props.route.params.screen})
  }
  _submit= (fun,v)=>{
    this.setState({loading:true})
    fun(v)
  }
  render() {
    const {loading,error}= this.state
    return (
      <View style={styles.container}>
        {loading && <View style={globalStyles.loader}>
        <ActivityIndicator size="large" animating={loading} /></View>}
        <AuthHeader/>
        <ScrollView contentContainerStyle={styles.form} style={{flex:1}}>
          <Input label='Téléphone' onChangeText={(e) => this.form.phone = e} icon={faPhone} />
          <Input label="Mot de passe" type="password" onChangeText={(e) => this.form.password = e} icon={faLock} />
          {error && <Text style={{ fontStyle: 'italic' , color:'rgb(200,0,0)'}}>{this.state.messageError}</Text>}
          <View style={styles.submit}>
            <Text style={styles.submitTxt}>Connexion</Text>
            <Mutation onError={errorMessage=>this._error(errorMessage)} mutation={LOGIN} onCompleted={data =>this._complete(data)}>
{
            logIn => <TouchableOpacity style={styles.submitBtn} onPress={()=>this._submit(logIn,{variables:this.form})}>
              <FontAwesomeIcon icon={faArrowRight} color="white"/>
            </TouchableOpacity>
          }
        </Mutation>
          </View>
            <Text style={styles.signUp} onPress={()=>this.props.navigation.navigate('AuthNavigation',{screen:'SignUp',params:{navigator:this.props.route.params.navigator,screen:this.props.route.params.screen}})}>Inscrivez Vous</Text>
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
