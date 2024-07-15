import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";


const BusinessCard = ({ business }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: 10,
        margin: 10,
        borderRadius: 15,
        backgroundColor: "#fff",
        alignItems: "center"
      }}
      onPress={() => router.push("/businessdetails/" + business.id)}
    >
      <Image
        source={{ uri: business?.imageUrl }}
        style={{
          width: 120,
          height: 120,
          borderRadius: 15,
        }}
      />
      <View style={{
        flex: 1,
        gap: 7
      }}>
        <Text style={{
          fontFamily: "outfit-bold",
          fontSize: 20
        }}>{business.name}</Text>
        <Text style={{
          fontFamily: "outfit",
          flex: 1
        }}>{business.address}</Text>
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
    </TouchableOpacity>
  );
};

export default BusinessCard;
