import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Intro = ({ business }) => {
  const router = useRouter();
  return (
    <View>
      <TouchableOpacity onPress={() => router.back()}>
        <View
          style={{
            position: "absolute",
            zIndex: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: 20,
          }}
        >
          <Ionicons name="arrow-back-circle" size={34} color="white" />
          <Ionicons name="heart-outline" size={40} color="white" />
        </View>
        <Image
          source={{ uri: business.imageUrl }}
          style={{
            width: "100%",
            height: 340,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          justifyContent: "space-between",
          padding: 20,
          marginTop: -20,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <View
          style={{
            padding: 20,
            marginTop: -20,
            backgroundColor: "#fff",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        >
          <Text
            style={{
              flexDirection: "row",
              fontSize: 20,
              fontFamily: "outfit-bold",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {business.name}
          </Text>

          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 18,
            }}
          >
            {business.address}
          </Text>
        </View>
        <Ionicons name="trash" size={24} color="red" />
      </View>
    </View>
  );
};

export default Intro;
