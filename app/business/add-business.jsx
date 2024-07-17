import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors.ts";
import * as ImagePicker from 'expo-image-picker';

const AddBusiness = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Add New Business",
    });
  }, []);
  const onImagePick = async () => {
 
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      setImage(result.assets[0].uri)
  }
  return (
    <View>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 25,
          padding: 20,
        }}
      >
        Add New Businesss
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          color: Colors.GRAY,
        }}
      >
        Fill all details in order to add a new business
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
        }}
        onPress={()=> onImagePick()}
      >
        { 
  !image ?  <Image
  source={require("../../assets/images/camera.png")}
  style={{
    width: 100,
    height: 100,
  }}
/> : <Image
  source={{uri:image}}
  style={{
    width: 100,
    height: 100,
    borderRadius: 15
  }}
/> 

        }
        
        
       
      </TouchableOpacity>
    </View>
  );
};

export default AddBusiness;
