import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from "../../constants/Colors";


const BusinessListCard = ({business}) => {
  return (
    <View>
      <Image source={{uri:business?.imageUrl}} style={{
  
        width: 200,
        height: 130,
        borderRadius: 15,
        marginRight: 15,}}/>
          <View
        style={{
          marginTop: 7,
          gap: 5,
        }}
      >
        <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2
        }}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 17,
            padding: 2
          }}
        >
          {business.name}
        </Text>
        <Text style={{
            fontFamily: "outfit",
            backgroundColor: Colors.PRIMARY,
            color: "#fff",
            padding: 2,
            fontSize: 10,
            borderRadius: 10
          }}>{business.category}</Text>
        </View>
        
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 13,
          }}
        >
          {business.address}
        </Text>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <Image
              source={require("../../assets/images/star.png")}
              style={{
                width: 15,
                height: 15,
              }}
            />
            <Text
              style={{
                fontFamily: "outfit",
              }}
            >
              4.5
            </Text>
            
          </View>
        
        </View>
      </View>
    </View>
  )
}

export default BusinessListCard