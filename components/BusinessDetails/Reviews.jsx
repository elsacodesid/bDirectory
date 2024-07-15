import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { Colors } from "../../constants/Colors";

const Reviews = () => {
    const [rating, setRating] = useState(4)
    const [userInput, setUserInput] = useState()
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
        }}
      >
        Reviews
      </Text>
      <View>
        <Rating
          showRating={false}
          imageSize={30}
          onFinishRating={(rating) => setRating(rating)}
          style={{ paddingVertical: 10 }}
        />
        <TextInput onChangeText={(value)=> setUserInput(value)} style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: Colors.GRAY,
            textAlignVertical: "top"
            
        }} placeholder="Write your comment"
        numberOfLines={4}
        
        
        />
      </View>
      <TouchableOpacity disabled={!userInput} onPress={() => console.log(userInput, rating)} style={{
        padding: 10,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center"
      }}><Text style={{
        fontFamily: "outfit-bold",
        fontSize: 20,
        color: "#fff"
      }}>Submit</Text></TouchableOpacity>
    </View>
  );
};

export default Reviews;
