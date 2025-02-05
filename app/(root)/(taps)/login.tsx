import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={myStyleSheet.container}>
      <Text style={myStyleSheet.text_login}>Log in</Text>
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
        fontSize:50,
        fontWeight:"bold"
    }
})