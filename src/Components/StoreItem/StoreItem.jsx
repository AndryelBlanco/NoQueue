import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { StyleSheet, Text, View } from 'react-native'
import { ItemContainer, StoreAdress, StoreTitle, TitleContainer } from './Styled_Item'


const StoreItem = ({item, functionPress, setStoreSelected}) => {
  return (
    <ItemContainer 
      style={styles.shaddows} 
      onPress={() => {
        functionPress()
        setStoreSelected(item)
      }} 
    >
      <TitleContainer>
        <MaterialCommunityIcons name={'shopping-outline'} size={20} color={'#A5A5A5'} />
        <StoreTitle>{item.title}</StoreTitle>
      </TitleContainer>
      <StoreAdress>Av. Ibicuí 581 </StoreAdress>
    </ItemContainer>
  )
}

const styles = StyleSheet.create({
  shaddows: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  }
});

export default StoreItem