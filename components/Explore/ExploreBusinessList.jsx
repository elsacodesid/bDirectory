import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import BusinessListCard from './BusinessListCard'

const ExploreBusinessList = ({businessList}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <FlatList
      data={businessList}
      renderItem={({item, index}) => (
        <BusinessListCard business={item} 
        key={index} />
      )}
      
       />
       <View style={{
        height: 500
       }}></View>
    </ScrollView>
  )
}

export default ExploreBusinessList