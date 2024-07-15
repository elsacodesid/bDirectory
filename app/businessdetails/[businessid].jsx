import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { db } from "../../configs/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Colors } from "../../constants/Colors";
import Intro from "../../components/BusinessDetails/Intro";
import ActionButtons from "../../components/BusinessDetails/ActionButtons";

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
    <View>
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
        </View>
      )}
    </View>
  );
};

export default BusinessDetails;
