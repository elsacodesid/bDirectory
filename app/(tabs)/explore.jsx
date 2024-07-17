import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors.ts";
import Category from "../../components/Home/Category.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig.js";
import ExploreBusinessList from "../../components/Explore/ExploreBusinessList.jsx";

export default function Explore() {
  const [businessList, setBusinessList] = useState([]);
  const getBusinessByCategory = async (category) => {
    setBusinessList([])
    const q = query(
      collection(db, "BusinessList"), where("category", "==", category))
    ;
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev) => [...prev, { id: doc.id, ...doc.data() }]);
    });
  };
  return (
    <View
    
      style={{
        padding: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
        }}
      >
        Explore More
      </Text>
      {/* SearchBar */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          backgroundColor: "#fff",
          padding: 10,
          marginVertical: 10,
          marginTop: 15,
          borderWidth: 1,
          borderColor: Colors.PRIMARY,
          borderRadius: 8,
        }}
      >
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder="Search..."
          style={{
            fontFamily: "outfit",
            fontSize: 16,
          }}
        />
      </View>
      {/* Category */}
      <Category
        explore={true}
        onCategorySelect={(category) => getBusinessByCategory(category)}
      />

      {/* Business list */}
      <ExploreBusinessList businessList={businessList} />
    </View>
  );
}
