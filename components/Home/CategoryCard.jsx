import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const CategoryCard = ({category, onCategoryPress}) => {

  return (
    <TouchableOpacity onPress={() => onCategoryPress(category)}>
        <View style={{
            padding: 10,
            backgroundColor: Colors.ICON_BG,
            borderRadius: 99,
            marginRight: 15
        }}>
      <Image source={{uri:category.icon}} style={{
        height: 40,
        width: 40
        }}/>
            <Text style={{
                fontSize: 12,
                fontFamily: "outfit-medium",
                textAlign: "center",
                marginTop: 5
            }}>{category.name}</Text>
        </View>

    </TouchableOpacity>
  )
}

export default CategoryCard