import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Operan extends Component {
    render() {
        const {sample_state_2} = this.props

        return (
            <View>
                <Text style={{color: 'gray'}}> Ini adalah Props: {sample_state_2} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
