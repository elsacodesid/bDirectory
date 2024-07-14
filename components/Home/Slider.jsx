import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../configs/FirebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";


const Slider = () => {
    useEffect(() => {
        GetSliderList()
     
    }, [])
 const [sliderList, setSliderList] = useState()
  const GetSliderList = async () => {
    setSliderList([])
    const q = query(collection(db, "Slider"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setSliderList(prev => [...prev, doc.data()])
    });

 
  };
  return (
    <View>
      <Text style={{
        fontFamily: "outfit-bold",
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 20,
        marginBottom: 5
      }}>#Special for you</Text>
      <FlatList style={{
        paddingLeft: 20
      }}
      data={sliderList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
        <Image source={{uri:item.imageUrl}} style={{
            width: 300,
            height: 150,
            borderRadius: 15,
            marginRight: 15
        }} />
  )}
       />
    </View>
  );
};

export default Slider;
