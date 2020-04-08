import React, {Component} from 'react'
import {View,StyleSheet,TextInput,Text,Animated,Dimensions,Keyboard,UIManager} from 'react-native'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const { State: TextInputState } = TextInput

class Input extends Component
{
  state = {  shift: new Animated.Value(0),icon:faEyeSlash,type:this.props.type }

  UNSAFE_componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow)
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide)
  }

  UNSAFE_componentWillUnmount() {
    this.keyboardDidShowSub.remove()
    this.keyboardDidHideSub.remove()
  }
    render()
    {
        const style = this.props.multiline?this.props.style:styles.formInput
        const { shift } = this.state
        return <Animated.View style={[{...styles.formItem, borderBottomWidth: this.props.multiline?0:1}, { transform: [{translateY: shift}] }]}>
            <Text style={styles.formLabel}>{this.props.label}</Text>
            <View style={styles.form}>
              {this.props.icon!=null&&<View ><FontAwesomeIcon icon={this.props.icon} color={'black'}/></View>}
             
              <View style={{...styles.formInputContainer,paddingLeft: this.props.icon?15:0}}>{this.state.type==="password"?<TextInput  multiline={this.props.multiline} numberOfLines={this.props.numberOfLines} secureTextEntry={true}  value={this.props.value} onFocus={this.props.onFocus} onChangeText={this.props.onChangeText} style={style} placeholder={this.props.placeholder}/>:<TextInput  multiline={this.props.multiline} numberOfLines={this.props.numberOfLines} value={this.props.value} onFocus={this.props.onFocus} onChangeText={this.props.onChangeText} style={style} placeholder={this.props.placeholder}/>}
              
               </View>
               {this.props.type==="password"&&<TouchableOpacity  onPress={()=>this.setState({type: this.state.type==="password"?'text':'password',icon:this.state.type==="password"?faEye:faEyeSlash})} ><FontAwesomeIcon icon={this.state.icon} color={'black'}/></TouchableOpacity>}
            
            </View>
        </Animated.View>
    }
    
handleKeyboardDidShow = (event) => {
    const { height: windowHeight } = Dimensions.get('window');
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height;
      const fieldTop = pageY;
      const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
      if (gap >= 0) {
        return;
      }
      Animated.timing(
        this.state.shift,
        {
          toValue: gap,
          duration: 0,
          useNativeDriver: true,
        }
      ).start();
    });
  }

  handleKeyboardDidHide = () => {
    Animated.timing(
      this.state.shift,
      {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }
    ).start();
  }
}
Input.propTypes = {
    icon : PropTypes.any,
    label : PropTypes.string,
    type: PropTypes.string,
    numberOfLines: PropTypes.number,
    multiline: PropTypes.bool,
    style: PropTypes.object,
    onChangeText: PropTypes.func
}
const styles = StyleSheet.create({
  form:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:'100%'
},
formItem:{
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'stretch',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 20
},

formInputContainer:{
    flex:1,
    paddingLeft: 15
}
})


export default Input
