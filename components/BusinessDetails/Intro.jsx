import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Intro = ({business}) => {
    const router = useRouter()
  return (
    <View>
        <TouchableOpacity onPress={() => router.back()}>
        <View style={{
position: "absolute",
zIndex: 10,
flexDirection: "row",
justifyContent: "space-between",
width: "100%",
padding: 20

        }}>
<Ionicons name="arrow-back-circle" size={34} color="black" />
<Ionicons name="heart-outline" size={40} color="black" />
        </View>
      <Image source={{uri:business.imageUrl}} style={{
        width: "100%",
        height: 340
      }} />
</TouchableOpacity>
    </View>
  )
}

export default Intro