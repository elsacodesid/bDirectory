import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors.ts";


const LoginScreen = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Image
          source={require("../assets/images/login.png")}
          style={{
            width: 220,
            height: 400,
            borderRadius: 20,
            borderWidth: 6,
            borderColor: "#000",
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
            textAlign: "center"
        }}>
          Your Ultimate{" "}
          <Text
            style={{
              color: Colors.PRIMARY,
              
            }}
          >
            Community Business Directory App
          </Text>
        </Text>
        <Text style={{
            fontSize: 15,
            fontFamily: "outfit",
            textAlign: "center",
            marginVertical: 15,
            color: Colors.GRAY
              
        }}>Find Your Favorite Business Near You and Post Your Own Business To Your Community</Text>
<TouchableOpacity style={styles.btn}>
    <Text style={{
        textAlign: "center",
        color: "#fff",
        fontFamily: "outfit"
    }}>Let's Get Started</Text>
</TouchableOpacity>
      </View> 

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: -20,
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 99,
    marginTop: 20
  }
});
