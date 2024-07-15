import { View, Text, FlatList, ActivityIndicator, RefreshControl } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessCard from "../../components/Home/BusinessCard.jsx";
import {Colors} from "../../constants/Colors.ts";

export default function BusinessListByCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
    getBusinessList();
  }, []);
  
  const getBusinessList = async () => {
    setIsLoading(true);
    setBusinessList([]);
    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setBusinessList((prev) => [...prev, {id: doc.id, ...doc.data()}]);
      setIsLoading(false)
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getBusinessList().then(() => setRefreshing(false));
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={"large"} color={Colors.PRIMARY} style={{
          marginTop: "50%"
        }}/>
      ) : businessList?.length > 0 ? (
        <FlatList
          data={businessList}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[Colors.PRIMARY]}
            />}
          renderItem={({ item, index }) => (
            <BusinessCard business={item} key={index} />
          )}
        />
      ) : (
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: "40%",
          }}
        >
          No Business Found
        </Text>
      )}
    </View>
  );
}
