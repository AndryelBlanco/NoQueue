import React from 'react'
import { Text, View } from 'react-native'
import Scanner from '../../Components/Scanner/Scanner'
import { ScannerPageContainer } from './Styled_ScannerPage'

const ScannerPage = ({ navigation }) => {
  
  function handleChange(){
    function getRandom(){
      let min = Math.ceil(0);
      let max = Math.floor(5);
      return Math.floor(Math.random() * (max - min) + min);
    }

    const randomNumber = getRandom();
    console.log("random", randomNumber)
    navigation.navigate('Checkout', {randomNumber: randomNumber});
  }
  
  return (
    <ScannerPageContainer>
      {/* <Text>SCANNER PAGE</Text> */}
      <Scanner handleChange={handleChange}/>
    </ScannerPageContainer>
  )
}

export default ScannerPage