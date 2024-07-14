import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const BusinessCard = ({business}) => {
  return (
    <View>
      <Image source={{uri:business?.imageUrl}} style={{
        width: 200,
        height: 130,
        borderRadius: 15,
        marginRight: 15
      }} />
      <View style={{
        marginTop: 7
      }}>
      <Text style={{
        fontFamily: "outfit-bold",
        fontSize: 17,

      }}>{business.name}</Text>
      <Text style={{
        fontFamily: "outfit",
        fontSize: 13,
      
      }}>{business.address}</Text>
</View>
    </View>
  )
}

export default BusinessCard