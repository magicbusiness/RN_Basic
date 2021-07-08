// Basic Form

import React, { Component } from 'react'
import { Text, StyleSheet, SafeAreaView, View, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native'

export default class BasicForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             password: '',
             isLogin: false
        };
    }
    
    login = () => 
    {
        if(!this.state.username && !this.state.password)
        {
            Alert.alert("Error", 'Username dan Password harus diisi')
        }
        else
        {
            this.setState({isLogin: true})
        }
    }
    
    render() {
        const{username, password, isLogin}=this.state;

        return (
            <SafeAreaView>
                <ScrollView>
                <Text style={styles.sample_title}>Sample 
                    <Text style={{color: 'red'}} > Basic </Text>
                </Text>

                <Text style={styles.another_title} >Simple Form</Text>

                <View style={styles.container}>
                    <View>
                        <Text>Username: </Text>
                        <TextInput
                            style={styles.sample_form} 
                            placeholder='Masukan Username'
                            value={username}
                            onChangeText={(username) => this.setState({username})}/>
                    </View>

                    <View>
                        <Text style={{marginTop: 10}}>Password: </Text>
                        <TextInput
                            style={styles.sample_form} 
                            placeholder='Masukan Password'
                            value={password}
                            onChangeText={(password) => this.setState({password})}
                            secureTextEntry={true}/>
                    </View>

                    <TouchableOpacity style={styles.sample_button} onPress={ () => this.login()}>
                        <Text style={styles.sample_btn_text}>Login</Text>
                    </TouchableOpacity>

                    {isLogin && (
                        <Text style={{marginTop: 30}}>Anda Berhasil Login: {username}</Text>
                    )}


                </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:
    {
        padding: 30
    },

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

    sample_form:
    {
        borderWidth: 1,
        padding: 10,
        borderColor: 'green',
        borderRadius: 5,
        height: 40,
        marginTop: 10
    },

    sample_button:
    {
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    }, 

    sample_btn_text:
    {
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
