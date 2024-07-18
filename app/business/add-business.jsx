import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors.ts";
import * as ImagePicker from "expo-image-picker";
import RNPickerSelect from "react-native-picker-select";
import { db, storage } from "../../configs/FirebaseConfig";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useUser } from "@clerk/clerk-expo";

const AddBusiness = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const {user} = useUser()

  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [website, setWebsite] = useState();
  const [contact, setContact] = useState();
  const [about, setAbout] = useState();
  const [category, setCategory] = useState();
  const [loading, setLoading]=useState(false)

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
    console.log(result)
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

  const addNewBusiness = async () => {
    setLoading(true)
    const fileName = Date.now().toString() + ".jpg";
    const res = await fetch(image);
    const blob = await res.blob();

    const imageRef = ref(storage, "/" + fileName);

    uploadBytes(imageRef, blob)
      .then((snapshot) => {
        console.log("File Uploaded...");
      })
      .then((res) => {
        getDownloadURL(imageRef).then(async (downloadUrl) => {
          console.log(downloadUrl);
          saveBusinessDetails(downloadUrl);
        });
      });

    const saveBusinessDetails = async (imageUrl) => {
      await setDoc(doc(db, "BusinessList", Date.now().toString()), {
        name: name,
        address: address,
        contact: contact,
        about: about,
        website: website,
        category: category,
        username: user?.fullName,
        userEmail: user?.primaryEmailAddress.emailAddress,
        userImage: user?.imageUrl,
        imageUrl: imageUrl
      });
setLoading(false)
      ToastAndroid.show("New Business Added!", ToastAndroid.LONG)
    };
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
        Add New Business
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          color: Colors.GRAY,
          marginLeft: 10
        }}
      >
        Fill all details in order to add a new business
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          marginLeft: 10
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
          onChangeText={(v) => setName(v)}
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
          onChangeText={(v) => setAddress(v)}
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
          onChangeText={(v) => setContact(v)}
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
          placeholder="website"
          onChangeText={(v) => setWebsite(v)}
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
          onChangeText={(v) => setAbout(v)}
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
            onValueChange={(value) => setCategory(value)}
            items={categoryList}
          />
        </View>
        <TouchableOpacity
          onPress={() => addNewBusiness()}
          disabled={loading}
          style={{
            padding: 10,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 20,
          }}
        >
          {loading ? <ActivityIndicator size={"large"} color={"#fff"} /> : <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-medium",
              color: "#fff",
            }}
          >
            Add New Business
          </Text>}
          
        </TouchableOpacity>
        <View style={{
          height: 100
        }}></View>
      </View>
    </ScrollView>
  );
};

export default AddBusiness;
