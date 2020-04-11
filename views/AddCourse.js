import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import Input from '../components/Input/Input'
import {faPrescriptionBottle, faSortNumericUpAlt,faVideo, faFilePdf} from '@fortawesome/free-solid-svg-icons'
import * as DocumentPicker from 'react-native-document-picker'

class AddCourse extends React.Component {
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
            type: [DocumentPicker.types.files],
          })
        this.setState({ filename: `file.pdf` })
          this.form.file = new ReactNativeFile(result)
          }
          catch(err){
            console.log(err)
          }
    }

    _pickVideo = async () => {  
      try{
        const result = await DocumentPicker.pick(
          {
            type: [DocumentPicker.types.videos],
          })
        this.setState({ imagename: `video.mp4` })
          this.form.video = new ReactNativeFile(result)
          }
          catch(err){
            console.log(err)
          }
    }
  render() {
    return (
      <View style={styles.container}>
         <Input label='Numéro du chapitre' onChangeText={(e)=>this.number=e}  icon={faSortNumericUpAlt}/>
          <Input label='Titre'  onChangeText={(e)=>this.title=e} icon={faPrescriptionBottle}/>
          <Input label="Ajouter un fichier PDF" value={this.state.imagename} onFocus={this._pickDocument} icon={faFilePdf} />
          <Input label="Ajouter une video" value={this.state.imagename} onFocus={this._pickVideo} icon={faVideo} />
          <TouchableOpacity style={styles.logIn}>
            <Text style={styles.logInText}>Ajouter</Text>
          </TouchableOpacity>
       </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    height: '100%',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  logIn:{
    backgroundColor: 'blue',
    padding:10,
    borderRadius:6,
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
  }

});


export default AddCourse
