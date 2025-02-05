import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={myStyleSheet.container}>
      <Text style={myStyleSheet.text_login}>Log in</Text>
      <TextInput style={myStyleSheet.textinput} placeholder='Username' keyboardType='default'></TextInput>
      <TextInput style={myStyleSheet.textinput} placeholder='Password' keyboardType='default'></TextInput>
      <Button title='Log in' color={"black"} />
    </View>
  )
}

export default Login

const myStyleSheet = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text_login:{
        fontSize:40,
        fontWeight:"bold",
        margin:40,
    },
    textinput:{
        borderColor:"#0002",
        borderWidth:1,
        borderRadius:10,
        margin : 10,
        padding:10,
        width:250
    },
    buttoninput:{
        color:"black"
    }
})