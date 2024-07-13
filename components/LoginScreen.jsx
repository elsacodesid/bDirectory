import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors.ts'


const LoginScreen = () => {
  return (
    <View >
        <View style={{
            display: "flex",
            alignItems: "center",
            marginTop: 100
        }}><Image source={require("../assets/images/login.png")} style={{
        width: 220,
        height: 400,
        borderRadius: 20,
        borderWidth: 6,
        borderColor: "#000"
      }} /></View>
      <View style={{
        backgroundColor: "#fff",

      }}>
<Text>Your Ultimate <Text style={{
    color: Colors.PRIMARY
}}>Community Business Directory App</Text></Text>
      </View>
    </View>
  )
}

export default LoginScreen