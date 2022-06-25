import React from 'react'
import { Text, View } from 'react-native'
import Scanner from '../../Components/Scanner/Scanner'
import { ScannerPageContainer } from './Styled_ScannerPage'

const ScannerPage = ({ navigation }) => {
  
  function handleChange(){
    navigation.navigate('Checkout');
  }
  
  return (
    <ScannerPageContainer>
      {/* <Text>SCANNER PAGE</Text> */}
      <Scanner handleChange={handleChange}/>
    </ScannerPageContainer>
  )
}

export default ScannerPage