import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ExploreBusinessList = ({businessList}) => {
  return (
    <View>
      <FlatList
      data={businessList}
      renderItem={({item, index}) => (
        <View><Text>{item.name}</Text></View>
      )}
      
       />
    </View>
  )
}

export default ExploreBusinessList