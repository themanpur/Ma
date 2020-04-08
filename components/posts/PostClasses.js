import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

class PostClasses extends Component {
    render() {
        const { classe } = this.props.item
        return (
            <View style = {styles.container}>
                    <TouchableOpacity style = {styles.classView}>
                        <Text style = {{fontWeight: 'bold', fontSize: 16, color: 'white'}}> {classe} </Text>
                    </TouchableOpacity>
            </View>
        )
    }
}
PostClasses.propTypes = {
    item: PropTypes.object,
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    classView: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5
    }
});
export default PostClasses
