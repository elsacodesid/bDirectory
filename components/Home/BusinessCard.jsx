import { View, Text, Image } from 'react-native'
import React from 'react'

const BusinessCard = ({business}) => {
  return (
    <View>
      <Image source={{uri:business?.imageUrl}} style={{
        width: 200,
        height: 130,
        borderRadius: 15,
        marginRight: 15
      }} />
    </View>
  )
}

export default BusinessCard