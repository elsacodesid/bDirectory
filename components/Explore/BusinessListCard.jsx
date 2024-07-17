import { View, Text, Image } from 'react-native'
import React from 'react'

const BusinessListCard = ({business}) => {
  return (
    <View style={{
        backgroundColor: "#fff",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 10
    }}>
      <Image source={{uri:business?.imageUrl}} style={{
        width: "100%",
        height: 150,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
      }} />
      <View style={{
        padding: 10
      }}>
        <Text style={{
            fontFamily: "outfit-bold",
            fontSize: 20
        }}>{business?.name}</Text>
        <Text style={{
            fontFamily: "outfit" 
        }}>{business?.address}</Text>
      </View>
    </View>
  )
}

export default BusinessListCard