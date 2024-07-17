import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors.ts";
import * as ImagePicker from "expo-image-picker";
import RNPickerSelect from "react-native-picker-select";
import { db } from "../../configs/FirebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

const AddBusiness = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Add New Business",
    });
    getCategoryList();
  }, []);
  const onImagePick = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    setImage(result.assets[0].uri);
  };
  const getCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, "Category"));
    const snapShot = await getDocs(q);
    snapShot.forEach((doc) => {
      setCategoryList((prev) => [
        ...prev,
        {
          label: doc.data().name,
          value: doc.data().name,
        },
      ]);
    });
  };

  return (
    <ScrollView>
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
        onPress={() => onImagePick()}
      >
        {!image ? (
          <Image
            source={require("../../assets/images/camera.png")}
            style={{
              width: 100,
              height: 100,
            }}
          />
        ) : (
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 15,
            }}
          />
        )}
      </TouchableOpacity>
      <View
        style={{
          padding: 10,
        }}
      >
        <TextInput
          placeholder="name"
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,

            borderColor: Colors.PRIMARY,
            fontSize: 17,
            backgroundColor: "#fff",
            marginTop: 10,
          }}
        />
        <TextInput
          placeholder="address"
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: Colors.PRIMARY,
            fontSize: 17,
            backgroundColor: "#fff",
            marginTop: 10,
          }}
        />
        <TextInput
          placeholder="contact"
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: Colors.PRIMARY,
            fontSize: 17,
            backgroundColor: "#fff",
            marginTop: 10,
          }}
        />
        <TextInput
          placeholder="about"
          multiline
          numberOfLines={5}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: Colors.PRIMARY,
            fontSize: 17,
            backgroundColor: "#fff",
            marginTop: 10,
          }}
        />
      </View>
      <View
        style={{
          padding: 10,
        }}
      >
        <View
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,

            borderColor: Colors.PRIMARY,
            fontSize: 17,
            backgroundColor: "#fff",
            marginTop: 10,
          }}
        >
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={categoryList}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddBusiness;
