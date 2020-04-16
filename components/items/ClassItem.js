import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity ,Image} from 'react-native'
import PropTypes from 'prop-types'
import albert from '../../assets/imgs/albert.jpg'

class ClassItem extends Component {
    render() {
        const { label,illustration,description} = this.props.item
        return (
            <TouchableOpacity activeOpacity={0.8} style = {styles.container}>
                <Text style={styles.title}>{label}</Text>
                <Image source={{uri:illustration}} style={styles.image} defaultSource={albert} />
                <Text>{description}</Text>
            </TouchableOpacity>
        )
    }
}
ClassItem.propTypes = {
    item: PropTypes.object,
  }
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        marginBottom:10
    },
    image:{
        height:200,
        width:'100%',
        borderRadius: 10
    },
    title:{
        fontWeight:'bold',
        textAlign:'left'
    }
});
export default ClassItem
