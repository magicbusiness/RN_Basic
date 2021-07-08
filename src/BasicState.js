// Basic State

import React, { Component } from 'react'
import { Text, StyleSheet, SafeAreaView, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
// Get the file
import Props from './Operan'

export default class BasicState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sample_state: 'Sample State',
             sample_state_2: 'Sample_State_2'
        }
    }
    
    // Change State
    change_state()
    {
        this.setState({
            sample_state_2: 'Change_State_2'
        });
    }

    render() {
        const {sample_state_2} = this.state
        return (
            <SafeAreaView>
                <ScrollView>
                <Text style={styles.sample_title}>Sample 
                    <Text style={{color: 'red'}} > Basic </Text>
                </Text>

                <Text style={styles.another_title} >Simple State</Text>

                <View>
                    <Text>Ini merupakan: {this.state.sample_state}</Text>
                    <Text style={{color: 'red'}}>Ini merupakan: {sample_state_2}</Text>

                    {/* Sample State */}
                    {/* Touchableopacity (Not Button)*/}
                    <TouchableOpacity style={styles.sample_touch} onPress={() => this.change_state()}>
                        <Text style={{textAlign: 'center'}}>Ganti Sample</Text>
                    </TouchableOpacity>
                </View>

                {/* Sample Props */}
                <View>
                    {/* Fecth data from another file */}
                    <Props sample_state_2={sample_state_2}/>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    sample_title:
    {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },

    another_title:
    {
        color: "#61dafb",
        fontSize: 30,
        marginBottom: 36,
        textAlign: 'center'
    },

    sample_touch:
    {
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 10,
        margin: 10
    }
})
