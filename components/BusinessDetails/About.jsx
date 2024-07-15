import { View, Text } from 'react-native'
import React from 'react'

const About = ({business}) => {
  return (
    <View style={{
        padding: 20,
        backgroundColor: "#fff",
    }}>
      <Text style={{
        fontFamily: "outfit-bold",
        fontSize: 20
      }}>About</Text>
      <Text style={{
        fontFamily: "outfit",
        lineHeight: 25
      }}>{business?.about}</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquid, qui repellendus cum officiis, consectetur in deserunt facilis non expedita odit consequuntur recusandae architecto necessitatibus. Atque eum nisi magni debitis quaerat! Ex magnam illum ullam qui voluptatem architecto. Ab possimus repellat nam quisquam exercitationem laborum labore veniam commodi magni sint?</Text>
    </View>
  )
}

export default About