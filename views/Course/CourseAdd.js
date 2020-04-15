import React from 'react';
import { StyleSheet, ScrollView,TouchableOpacity} from 'react-native'
import Input from '../../components/Input/Input'
import {faPrescriptionBottle, faSortNumericUpAlt,faVideo, faFilePdf} from '@fortawesome/free-solid-svg-icons'
import DocumentPicker from 'react-native-document-picker'
import  {ReactNativeFile} from 'apollo-upload-client'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {globalStyles} from '../../assets/styles/globalStyles'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
class CourseAdd extends React.Component {
  state={
    filename:"",
    videoname: "",
    files:[],
    video:[],
   loading:false,
   error:false,
   messageError:"",
  }
  form={
    file: "",
    video: ""
}
    _pickDocument = async () => {  
        try{
          const result = await DocumentPicker.pick(
            {
              type: [DocumentPicker.types.pdf],
            })
               }
            catch(err){
              console.log(err)
            }
    }

    _pickVideo = async () => {  
        try{
          const result = await DocumentPicker.pick(
            {
              type: [DocumentPicker.types.allFiles],
            })
               }
            catch(err){
              console.log(err)
            }
    }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
          <Input label='Numéro du chapitre' onChangeText={(e)=>this.number=e}  icon={faSortNumericUpAlt}/>
          <Input label='Titre'  onChangeText={(e)=>this.title=e} icon={faPrescriptionBottle}/>
          <Input label='Description' style={styles.description} onChangeText={(e)=>this.title=e}  multiline={true} numberOfLines={5}/>
          <Input label="Ajouter un fichier PDF"  onFocus={this._pickDocument} icon={faFilePdf} />
          <Input label="Ajouter une video"  onFocus={this._pickVideo} icon={faVideo} />
          <TouchableOpacity style={styles.submit}>
            <FontAwesomeIcon icon={faCheck} size={32} color="white"/>
          </TouchableOpacity>
       </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  submit:{
    backgroundColor: globalStyles.secondaryColor,
    width:60,
    height:60,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
  },
  logInText:{
    fontSize: 18,
    color: 'white'
  },
  fileContainer:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
    marginBottom:20
  },
  description:{
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    paddingLeft: 5,
    borderRadius:6,
    marginTop:8
}

});


export default CourseAdd
