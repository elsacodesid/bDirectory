import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { db } from "../../configs/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Colors } from "../../constants/Colors";
import Intro from "../../components/BusinessDetails/Intro";
import ActionButtons from "../../components/BusinessDetails/ActionButtons";
import About from "../../components/BusinessDetails/About";
import Reviews from "../../components/BusinessDetails/Reviews";

const BusinessDetails = () => {
  const { businessid } = useLocalSearchParams();
  const [businessDetails, setBusinessDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (businessid) {
      getBusinessDetailsById();
    }
  }, [businessid]);
  const getBusinessDetailsById = async () => {
    try {
      setIsLoading(true);
      const docRef = doc(db, "BusinessList", businessid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBusinessDetails(docSnap.data());
      } else {
        console.log("No such document");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator
          size={"large"}
          color={Colors.PRIMARY}
          style={{
            marginTop: "70%",
          }}
        />
      ) : (
        <View>
          {/* Intro */}
          <Intro business={businessDetails} />
          {/* Action Buttons */}
          <ActionButtons business={businessDetails} />

          {/* About Section */}
          <About business={businessDetails} />

          {/* Reviews */}
          <Reviews business={businessDetails} />
        </View>
      )}
    </ScrollView>
  );
};

export default BusinessDetails;
