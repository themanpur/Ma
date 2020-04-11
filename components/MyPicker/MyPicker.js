import React,{Component} from 'react'
import {View,Picker,StyleSheet,Text} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import PropTypes from 'prop-types'

class MyPicker extends Component {

   state={
       defaultValue: this.props.data[0]
   }
    render()
    {
     return  <View style={styles.formItem}>

        <Text style={styles.label}>{this.props.placeholder}</Text>
        <View style={styles.itemRow}>
        {this.props.icon&&<FontAwesomeIcon icon={this.props.icon}  />}
        <View style={{paddingLeft:15,width:'95%'}}>
         <Picker style={{height: 40, width: '100%'}} selectedValue={this.state.defaultValue}  onValueChange={(itemValue,itemIndex)=>{
            this.props.onValueChange(itemValue,itemIndex)
            this.setState({defaultValue:itemValue})}} >
        {this.props.data.map((v,i)=><Picker.Item key={i.toString()} label={v} value={v}/>)}
    </Picker>
    </View>
    </View>
    </View>
    }

}
MyPicker.propTypes = {
    data: PropTypes.array,
    onValueChange: PropTypes.func,
    placeholder: PropTypes.string,
    icon: PropTypes.any
}
const styles = StyleSheet.create({
    label:{
        alignSelf: 'flex-start'
    },
    formItem:{
        width: '100%',
        flexDirection: 'column',
        justifyContent:'space-between',
        alignItems: 'stretch',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom:15
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'100%'
    }
})
    export default MyPicker