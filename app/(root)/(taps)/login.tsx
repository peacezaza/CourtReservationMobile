import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const Login = () => {
    return (
        <View style={myStyleSheet.container}>
            <Text style={myStyleSheet.text_login}>Log in</Text>
            <TextInput style={myStyleSheet.textinput} placeholder='Username' keyboardType='default'></TextInput>
            <TextInput style={myStyleSheet.textinput} placeholder='Password' keyboardType='default'></TextInput>
            <View style={myStyleSheet.buttoninput1}>
                <Button title='Log in' color="black" />
            </View>
            <View style={myStyleSheet.buttoninput2}>
                <Button color="#000" title='Sign In with Google' />
            </View>
            <Text style={{ color: "#0007", fontSize: 16, fontWeight: 500 }}>Don't have an account? <Link href="/sign-up" style={{textDecorationLine:"underline", color:"black"}}>Sign up</Link></Text>
        </View>
    )
}

export default Login

const myStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop:"40%"
    },
    text_login: {
        fontSize: 40,
        fontWeight: "bold",
        margin: 30,
    },
    textinput: {
        borderColor: "#0002",
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        width: 250
    },
    buttoninput1: {
        margin: 10,
        width: 250,
        borderRadius: 10,
        overflow: 'hidden',
    },
    buttoninput2: {
        margin: 10,
        marginBottom:20,
        width: 250,
        borderRadius: 10,
        overflow: 'hidden',
    },
})