import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors.ts'

const MenuList = () => {
    const menuList = [
        {
            id: 1,
            name: "Add Business",
            icon: require("../../assets/images/add.png"),
            path: ""
        },
        {
            id: 2,
            name: "My Business",
            icon: require("../../assets/images/business-and-trade.png"),
            path: ""
        },
        {
            id: 3,
            name: "Share App",
            icon: require("../../assets/images/share_1.png"),
            path: ""
        },
        {
            id: 4,
            name: "Logout",
            icon: require("../../assets/images/logout.png"),
            path: ""
        },

    ]
  return (
    <View style={{
        marginTop: 50,
    }}>
      <FlatList data={menuList}
      numColumns={2}
      renderItem={({item, index}) => (
        <View style={{
            width: 145,
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            padding: 8,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: Colors.PRIMARY,
            margin: 8,
            backgroundColor: "#fff"
        }}>

            <Image source={item.icon} style={{
            
                width: 50,
                height: 50
            }} />
            <Text style={{
                flex: 1,
                fontFamily: "outfit-medium",
                fontSize: 19
            }}>{item.name}</Text>
        </View>
      )}
      
       />
       <Text style={{
        fontFamily: "outfit",
        textAlign: "center",
        marginTop: 50,
        color: Colors.GRAY
       }}>App Developed by elsacodesid @ 2024</Text>
    </View>
  )
}

export default MenuList