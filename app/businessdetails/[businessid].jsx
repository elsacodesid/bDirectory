import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import db from "../../configs/FirebaseConfig"
import { doc, getDoc } from "firebase/firestore";

const BusinessDetails = () => {
  const { businessid } = useLocalSearchParams();
  useEffect(() => {
    if (businessid) {
      console.log("Business ID from params:", businessid);
      getBusinessDetailsById();
    } else {
      console.error("Business ID is undefined");
    }
  }, [businessid]);
  const getBusinessDetailsById = async ()=>{
const docRef = doc(db, "BusinessList", businessid)
const docSnap = await getDoc(docRef)
if (docSnap.exists()) {
    console.log("Document data:", docSnap.data())
} else {
    console.log("No such document")
    
}
  }
  return (
    <View>
      <Text>{businessid}</Text>
    </View>
  );
};

export default BusinessDetails;
