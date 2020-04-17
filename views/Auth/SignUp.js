import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity,View,ActivityIndicator } from 'react-native'
import Input from '../../components/Input/Input'
import { faLock, faArrowRight, faPhone, faEnvelope ,faUser, faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import AuthHeader from '../../components/Header/AuthHeader'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {globalStyles} from '../../assets/styles/globalStyles'
import MyPicker from '../../components/MyPicker/MyPicker'
import { Mutation,Query } from 'react-apollo'
import {setItem} from '../../helpers/localStorage'
import {SIGNUP} from '../../consts/mutations'
import {CLASS_LIST} from '../../consts/queries'

class SignUp extends React.Component {
  state={
    loading:false,
    error:false,
    messageError:""
  }
  form={
    name:"",
    email:"",
    level:"",
    phone:"",
    password:""
  }
  _error=(errorMessage)=>{
    console.log(`Login error ${errorMessage}`)
    let message = errorMessage.toString() 
    this.setState({error:true,loading:false,messageError:message.substr(22)})
  }
  _complete=(data)=>{
    setItem("token",data.signUp.token)
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
          <Input label='Noms et prénoms' onChangeText={(e) => this.form.name = e} icon={faUser} />
          <Input label='Email' onChangeText={(e) => this.form.email = e} icon={faEnvelope} />
          <Input label='Téléphone' onChangeText={(e) => this.form.phone = e} icon={faPhone} />
          <Query query={CLASS_LIST}>
          {
       ({loading,error,data})=>
       {
         return <MyPicker  icon={faGraduationCap} onChange={(itemValue,index)=>{this.form.level=data.classes[index].id}} placeholder="Classe" data={data.classes.map((v,i) =>{if(i===0){this.form.level=v.id} ;return `${v.label}`})} />
       }}
          </Query>             
          <Input label="Mot de passe" type="password" onChangeText={(e) => this.form.password = e} icon={faLock} />
          {error && <Text style={{ fontStyle: 'italic' , color:'rgb(200,0,0)'}}>{this.state.messageError}</Text>}
          <View style={styles.submit}>
            <Text style={styles.submitTxt}>Inscription</Text>
            <Mutation onError={errorMessage=>this._error(errorMessage)} mutation={SIGNUP} onCompleted={data =>this._complete(data)}>
{
            signUp => <TouchableOpacity style={styles.submitBtn} onPress={()=>this._submit(signUp,{variables:this.form})}>
              <FontAwesomeIcon icon={faArrowRight} color="white"/>
            </TouchableOpacity>
          }
        </Mutation>
          </View>
            <Text style={styles.signUp} onPress={()=>this.props.navigation.navigate('AuthNavigation',{screen:'LogIn'})}>Connectez Vous</Text>
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

export default SignUp
