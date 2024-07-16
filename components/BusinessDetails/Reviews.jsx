import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { Colors } from "../../constants/Colors";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { useUser } from "@clerk/clerk-expo";
import { FlatList } from "react-native-gesture-handler";

const Reviews = ({ business }) => {
  const [rating, setRating] = useState(4);
  const [userInput, setUserInput] = useState();
  const { user } = useUser();
  const onSubmit = async () => {
    const docRef = doc(db, "BusinessList", business.id);
    await updateDoc(docRef, {
      reviews: arrayUnion({
        rating: rating,
        comment: userInput,
        userName: user?.fullName,
        userImage: user?.imageUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      }),
    });
    ToastAndroid.show("Comment Added Successfully!", ToastAndroid.BOTTOM);
  };
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
        {/* Display Posted Reviews */}
        <View style={{
          flexDirection: "row",
          gap: 10,
       
          
        }}>
          {business?.reviews?.map((item, index) => (
            <View style={{
              flex: 1,
marginLeft: 10,
              marginRight: 10

            }}>
              <Image source={{uri:item.userImage}} style={{
                height: 50,
                width: 50,
                borderRadius: 99,
              }} />
             <View style={{
              
             }}> 
              <Text style={{fontFamily: "outfit-bold"}}>{item.userName}</Text>
              <Rating imageSize={20} ratingCount={item.rating} style={{ alignItems: "flex-start"}} />
              <Text style={{fontFamily: "outfit", marginVertical: 10}}>{item.comment}</Text></View>
            </View>
          ))}
        </View>
        <TextInput
          onChangeText={(value) => setUserInput(value)}
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: Colors.GRAY,
            textAlignVertical: "top",
          }}
          placeholder="Write your comment"
          numberOfLines={4}
        />
      </View>

      <TouchableOpacity
        disabled={!userInput}
        onPress={() => onSubmit()}
        style={{
          padding: 10,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 6,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
            color: "#fff",
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reviews;
