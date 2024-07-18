import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { db } from "../../configs/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import BusinessListCard from "../../components/BusinessList/BusinessListCard.jsx"

const MyBusiness = () => {
  const { user } = useUser();
  const [businessList, setBusinessList] = useState([])

  useEffect(() => {
    user && getUserBusiness();
  }, [user]);

  const getUserBusiness = async () => {
    setBusinessList([])
    const q = query(
      collection(db, "BusinessList"),
      where("userEmail", "==", user?.primaryEmailAddress.emailAddress)
    );
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList(prev => [...prev, {id: doc.id, ...doc.data()}])
    });
  };
  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
        }}
      >
        MyBusiness
      </Text>
      <FlatList 
      data={businessList}
      renderItem={({item, index}) => (
<BusinessListCard business={item} key={index} />
      )}
      />
    </View>
  );
};

export default MyBusiness;
