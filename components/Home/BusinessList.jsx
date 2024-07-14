import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessCard from "./BusinessCard";

const BusinessList = () => {
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    getBusinessList();
  }, []);
  const getBusinessList = async () => {
    setBusinessList([]);
    const q = query(collection(db, "BusinessList"), limit(10));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View style={{
        marginLeft: 20,
        borderRadius: 15

    }}>
      <View
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            marginTop: 10,
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          Popular Business
        </Text>
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: "outfit-medium",
          }}
        >
          View All
        </Text>
      </View>
      <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View>
            <BusinessCard business={item} key={index} />
          </View>
        )}
      />
    </View>
  );
};

export default BusinessList;
